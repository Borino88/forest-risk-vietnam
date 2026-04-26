'use client'

import React, { useState, useMemo } from 'react'
import Map, { NavigationControl, ScaleControl, FullscreenControl, GeolocateControl, Layer, Source } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Layers, ChevronRight, ChevronLeft, Info, Download, Target, MapPin } from 'lucide-react'

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'

// Simulated Risk Grid for Pilot districts
const generateRiskGrid = () => {
  const points = []
  // K'Bang approx bounds: lon 108.3 to 108.6, lat 14.1 to 14.5
  // Mang Yang approx bounds: lon 108.1 to 108.4, lat 13.9 to 14.2
  
  for (let lon = 108.1; lon <= 108.7; lon += 0.05) {
    for (let lat = 13.8; lat <= 14.6; lat += 0.05) {
      const prob = Math.random()
      points.push({
        type: 'Feature',
        properties: { prob },
        geometry: {
          type: 'Point',
          coordinates: [lon, lat]
        }
      })
    }
  }
  return { type: 'FeatureCollection', features: points }
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
    alerts: false
  })

  const riskData = useMemo(() => generateRiskGrid(), [])

  const toggleLayer = (layer: keyof typeof activeLayers) => {
    setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }))
  }

  const zoomTo = (lon: number, lat: number, zoom: number) => {
    setViewState(prev => ({ ...prev, longitude: lon, latitude: lat, zoom, transitionDuration: 1000 }))
  }

  return (
    <div className="relative h-[calc(100vh-64px)] w-full overflow-hidden flex">
      {/* Sidebar */}
      <div className={`bg-white border-r border-[#D9E2DC] transition-all duration-300 z-10 flex flex-col ${sidebarOpen ? 'w-80' : 'w-0'}`}>
        {sidebarOpen && (
          <div className="p-6 flex-1 overflow-y-auto">
            <h2 className="text-xl font-bold text-[#12372A] mb-6 flex items-center gap-2 border-b border-[#F5F1E8] pb-4">
              <Layers className="h-5 w-5" /> Layer Control
            </h2>
            
            <div className="space-y-8">
              {/* Administrative */}
              <div>
                <h3 className="text-xs font-bold text-[#5B6472] uppercase tracking-widest mb-4">Pilot Boundaries</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.districts} onChange={() => toggleLayer('districts')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-medium group-hover:text-[#12372A]">Pilot District Boundaries</span>
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
                    <input type="checkbox" checked={activeLayers.alerts} onChange={() => toggleLayer('alerts')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-medium group-hover:text-[#12372A]">GFW Integrated Alerts</span>
                  </label>
                </div>
                
                {activeLayers.risk && (
                  <div className="mt-4 p-4 bg-[#F5F1E8] rounded-lg border border-[#D9E2DC]">
                    <div className="text-[10px] font-bold text-[#5B6472] uppercase mb-2 tracking-widest">Risk Legend</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#B42318]"></div>
                        <span className="text-xs font-medium">High Probability (&gt;0.7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#E67700]"></div>
                        <span className="text-xs font-medium">Medium Probability (0.4-0.7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#2F9E44]"></div>
                        <span className="text-xs font-medium">Low Probability (&lt;0.4)</span>
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
              <button className="w-full flex items-center justify-center gap-2 bg-[#12372A] text-white py-2.5 rounded font-bold text-sm hover:bg-[#2D6A4F] transition-colors">
                <Download className="h-4 w-4" /> Export Spatial Data
              </button>
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
        >
          <NavigationControl position="top-right" />
          <FullscreenControl position="top-right" />
          <GeolocateControl position="top-right" />
          <ScaleControl position="bottom-right" />
          
          {activeLayers.risk && (
            <Source id="risk-grid" type="geojson" data={riskData}>
              <Layer
                id="risk-points"
                type="circle"
                paint={{
                  'circle-radius': ['interpolate', ['linear'], ['zoom'], 8, 3, 12, 15],
                  'circle-color': [
                    'step',
                    ['get', 'prob'],
                    '#2F9E44',
                    0.4, '#E67700',
                    0.7, '#B42318'
                  ],
                  'circle-opacity': 0.6,
                  'circle-stroke-width': 1,
                  'circle-stroke-color': '#ffffff'
                }}
              />
            </Source>
          )}
        </Map>

        {/* Info Overlay */}
        <div className="absolute bottom-10 left-10 z-10 bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-[#D9E2DC] shadow-xl max-w-sm">
          <div className="flex items-center gap-2 text-[#12372A] font-bold mb-3 uppercase text-xs tracking-widest">
            <Info className="h-4 w-4 text-[#52B788]" /> Map Information
          </div>
          <p className="text-[11px] text-[#5B6472] leading-relaxed">
            Showing pilot deforestation-risk outputs for K’Bang and Mang Yang districts in Gia Lai Province. Current risk layers are based on the project’s model outputs and should be interpreted as prioritization zones, not legal proof of forest loss.
          </p>
        </div>
      </div>
    </div>
  )
}
