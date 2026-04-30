'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Map, { NavigationControl, ScaleControl, FullscreenControl, GeolocateControl, Layer, Source, Popup } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Layers, ChevronRight, ChevronLeft, Info, Download, Target, MapPin, AlertTriangle } from 'lucide-react'

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'

interface RiskPoint {
  type: 'Feature'
  geometry: {
    type: 'Point'
    coordinates: [number, number]
  }
  properties: {
    district: string
    risk_rf: number
    warn_top5: boolean
    warn_top10: boolean
    elevation: number
    slope: number
    ndvi: number
    label: number
  }
}

export const MapComponent = () => {
  const [viewState, setViewState] = useState({
    longitude: 108.45,
    latitude: 14.2,
    zoom: 9
  })
  
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeLayers, setActiveLayers] = useState({
    districts: true,
    roads: true,
    risk: true,
    alerts: false,
    warningZones: true
  })

  const [riskData, setRiskData] = useState<{ type: 'FeatureCollection', features: RiskPoint[] }>({
    type: 'FeatureCollection',
    features: []
  })

  const [boundaries, setBoundaries] = useState<any>(null)
  const [roads, setRoads] = useState<any>(null)
  const [hoverInfo, setHoverInfo] = useState<RiskPoint | null>(null)

  useEffect(() => {
    // Load Boundaries
    Promise.all([
      fetch('/data/boundaries/GiaLai_KBang_district_boundary.geojson').then(res => res.json()),
      fetch('/data/boundaries/GiaLai_MangYang_district_boundary.geojson').then(res => res.json())
    ]).then(([kbang, mangyang]) => {
      setBoundaries({
        type: 'FeatureCollection',
        features: [...kbang.features, ...mangyang.features]
      })
    })

    // Load Roads
    Promise.all([
      fetch('/data/roads/kbang_roads.geojson').then(res => res.json()),
      fetch('/data/roads/mangyang_roads.geojson').then(res => res.json())
    ]).then(([kbang, mangyang]) => {
      setRoads({
        type: 'FeatureCollection',
        features: [...kbang.features, ...mangyang.features]
      })
    })

    // Load and Parse CSV
    fetch('/data/predictions/Model_predictions_and_warning_zones_HansenLoss.csv')
      .then(res => res.text())
      .then(text => {
        const lines = text.split('\n')
        const headers = lines[0].split(',')
        
        const latIdx = headers.indexOf('lat')
        const lonIdx = headers.indexOf('lon')
        const riskIdx = headers.indexOf('risk_rf')
        const distIdx = headers.indexOf('district')
        const warn5Idx = headers.indexOf('warn_top5_rf')
        const warn10Idx = headers.indexOf('warn_top10_rf')
        const elevIdx = headers.indexOf('elevation')
        const slopeIdx = headers.indexOf('slope')
        const ndviIdx = headers.indexOf('NDVI')
        const labelIdx = headers.indexOf('label')

        const features: RiskPoint[] = lines.slice(1).filter(line => line.trim()).map(line => {
          const parts = line.split(',')
          return {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [parseFloat(parts[lonIdx]), parseFloat(parts[latIdx])]
            },
            properties: {
              district: parts[distIdx],
              risk_rf: parseFloat(parts[riskIdx]),
              warn_top5: parts[warn5Idx] === '1',
              warn_top10: parts[warn10Idx] === '1',
              elevation: parseFloat(parts[elevIdx]),
              slope: parseFloat(parts[slopeIdx]),
              ndvi: parseFloat(parts[ndviIdx]),
              label: parseInt(parts[labelIdx])
            }
          }
        })
        setRiskData({ type: 'FeatureCollection', features })
      })
  }, [])

  const toggleLayer = (layer: keyof typeof activeLayers) => {
    setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }))
  }

  const zoomTo = (lon: number, lat: number, zoom: number) => {
    setViewState(prev => ({ ...prev, longitude: lon, latitude: lat, zoom }))
  }

  return (
    <div className="relative h-[calc(100vh-64px)] w-full overflow-hidden flex">
      {/* Sidebar */}
      <div className={`bg-white border-r border-[#D9E2DC] transition-all duration-300 z-10 flex flex-col ${sidebarOpen ? 'w-80' : 'w-0'}`}>
        {sidebarOpen && (
          <div className="p-6 flex-1 overflow-y-auto">
            <h2 className="text-xl font-bold text-[#12372A] mb-6 flex items-center gap-2 border-b border-[#F5F1E8] pb-4">
              <Layers className="h-5 w-5" /> Map Layers
            </h2>
            
            <div className="space-y-8">
              {/* Administrative */}
              <div>
                <h3 className="text-xs font-bold text-[#5B6472] uppercase tracking-widest mb-4">Pilot Boundaries</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.districts} onChange={() => toggleLayer('districts')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-medium group-hover:text-[#12372A]">District Boundaries</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.roads} onChange={() => toggleLayer('roads')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-medium group-hover:text-[#12372A]">OSM Road Network</span>
                  </label>
                </div>
              </div>

              {/* Model Outputs */}
              <div>
                <h3 className="text-xs font-bold text-[#B42318] uppercase tracking-widest mb-4">Research Outputs</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.risk} onChange={() => toggleLayer('risk')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-bold group-hover:text-[#B42318]">Deforestation Risk Map</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.warningZones} onChange={() => toggleLayer('warningZones')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-medium group-hover:text-[#12372A]">Top 10% Warning Zones</span>
                  </label>
                </div>
                
                {activeLayers.risk && (
                  <div className="mt-4 p-4 bg-[#F5F1E8] rounded-lg border border-[#D9E2DC]">
                    <div className="text-[10px] font-bold text-[#5B6472] uppercase mb-2 tracking-widest">Risk Legend</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#B42318]"></div>
                        <span className="text-xs font-medium">High Risk (&gt;0.7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#E67700]"></div>
                        <span className="text-xs font-medium">Medium Risk (0.4-0.7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#2F9E44]"></div>
                        <span className="text-xs font-medium">Low Risk (&lt;0.4)</span>
                      </div>
                      <div className="pt-1 mt-1 border-t border-[#D9E2DC] flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full border-2 border-black bg-transparent"></div>
                        <span className="text-xs font-bold italic">Warning Zone</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-xs font-bold text-[#5B6472] uppercase tracking-widest mb-4">Quick Navigation</h3>
                <div className="grid grid-cols-1 gap-2">
                  <button onClick={() => zoomTo(108.45, 14.3, 10)} className="flex items-center gap-2 px-3 py-2 bg-white border border-[#D9E2DC] rounded text-xs font-bold hover:bg-[#F5F1E8] transition-colors">
                    <Target className="h-3 w-3" /> Zoom to K’Bang
                  </button>
                  <button onClick={() => zoomTo(108.25, 14.05, 10.5)} className="flex items-center gap-2 px-3 py-2 bg-white border border-[#D9E2DC] rounded text-xs font-bold hover:bg-[#F5F1E8] transition-colors">
                    <Target className="h-3 w-3" /> Zoom to Mang Yang
                  </button>
                  <button onClick={() => zoomTo(108.45, 14.2, 9)} className="flex items-center gap-2 px-3 py-2 bg-white border border-[#D9E2DC] rounded text-xs font-bold hover:bg-[#F5F1E8] transition-colors">
                    <MapPin className="h-3 w-3" /> Reset View
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D9E2DC]">
              <a href="/data/predictions/Model_predictions_and_warning_zones_HansenLoss.csv" download className="w-full flex items-center justify-center gap-2 bg-[#12372A] text-white py-2.5 rounded font-bold text-sm hover:bg-[#2D6A4F] transition-colors no-underline">
                <Download className="h-4 w-4" /> Download Prediction CSV
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-[#D9E2DC] p-1.5 rounded-r-md shadow-md hover:bg-[#F5F1E8]"
      >
        {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>

      {/* Map */}
      <div className="flex-1 relative">
        <Map
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          mapStyle={MAP_STYLE}
          style={{ width: '100%', height: '100%' }}
          interactiveLayerIds={['risk-points']}
          onClick={e => {
            if (e.features && e.features[0]) {
              setHoverInfo(e.features[0] as unknown as RiskPoint)
            } else {
              setHoverInfo(null)
            }
          }}
        >
          <NavigationControl position="top-right" />
          <FullscreenControl position="top-right" />
          <GeolocateControl position="top-right" />
          <ScaleControl position="bottom-right" />
          
          {activeLayers.districts && boundaries && (
            <Source type="geojson" data={boundaries}>
              <Layer
                id="district-fills"
                type="fill"
                paint={{
                  'fill-color': '#12372A',
                  'fill-opacity': 0.05
                }}
              />
              <Layer
                id="district-borders"
                type="line"
                paint={{
                  'line-color': '#12372A',
                  'line-width': 1.5,
                  'line-dasharray': [2, 2]
                }}
              />
            </Source>
          )}

          {activeLayers.roads && roads && (
            <Source type="geojson" data={roads}>
              <Layer
                id="roads-layer"
                type="line"
                paint={{
                  'line-color': '#5B6472',
                  'line-width': 0.5,
                  'line-opacity': 0.4
                }}
              />
            </Source>
          )}

          {activeLayers.risk && riskData.features.length > 0 && (
            <Source id="risk-grid" type="geojson" data={riskData}>
              <Layer
                id="risk-points"
                type="circle"
                paint={{
                  'circle-radius': ['interpolate', ['linear'], ['zoom'], 8, 2, 12, 10],
                  'circle-color': [
                    'step',
                    ['get', 'risk_rf'],
                    '#2F9E44',
                    0.4, '#E67700',
                    0.7, '#B42318'
                  ],
                  'circle-opacity': 0.7,
                  'circle-stroke-width': [
                    'case',
                    ['boolean', ['get', 'warn_top10'], false],
                    1.5,
                    0
                  ],
                  'circle-stroke-color': '#000000'
                }}
              />
            </Source>
          )}

          {hoverInfo && (
            <Popup
              longitude={hoverInfo.geometry.coordinates[0]}
              latitude={hoverInfo.geometry.coordinates[1]}
              anchor="bottom"
              onClose={() => setHoverInfo(null)}
              closeButton={true}
              className="z-50"
            >
              <div className="p-3 min-w-[200px]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-[#12372A] m-0">{hoverInfo.properties.district}</h4>
                  {hoverInfo.properties.warn_top10 && (
                    <span className="bg-black text-white text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" /> WARNING
                    </span>
                  )}
                </div>
                
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#5B6472]">Risk Probability:</span>
                    <span className={`font-bold ${
                      hoverInfo.properties.risk_rf > 0.7 ? 'text-[#B42318]' : 
                      hoverInfo.properties.risk_rf > 0.4 ? 'text-[#E67700]' : 'text-[#2F9E44]'
                    }`}>
                      {(hoverInfo.properties.risk_rf * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B6472]">Elevation:</span>
                    <span className="font-medium">{hoverInfo.properties.elevation.toFixed(0)}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B6472]">Slope:</span>
                    <span className="font-medium">{hoverInfo.properties.slope.toFixed(1)}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B6472]">NDVI:</span>
                    <span className="font-medium">{hoverInfo.properties.ndvi.toFixed(3)}</span>
                  </div>
                  <div className="pt-1 mt-1 border-t border-[#D9E2DC] text-[10px] italic text-[#5B6472]">
                    Coordinates: {hoverInfo.geometry.coordinates[1].toFixed(4)}, {hoverInfo.geometry.coordinates[0].toFixed(4)}
                  </div>
                </div>
              </div>
            </Popup>
          )}
        </Map>

        {/* Info Overlay */}
        <div className="absolute bottom-10 left-10 z-10 bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-[#D9E2DC] shadow-xl max-w-sm">
          <div className="flex items-center gap-2 text-[#12372A] font-bold mb-3 uppercase text-xs tracking-widest">
            <Info className="h-4 w-4 text-[#52B788]" /> Map Information
          </div>
          <p className="text-[11px] text-[#5B6472] leading-relaxed">
            Current outputs are pilot model predictions for K’Bang and Mang Yang districts (Gia Lai Province, 2023). They are prioritization zones based on random forest (RF) probability, not legal proof of forest loss. Warning zones represent the top 10% highest risk cells.
          </p>
        </div>
      </div>
    </div>
  )
}
