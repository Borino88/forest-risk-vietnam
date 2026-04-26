'use client'

import React, { useState, useEffect } from 'react'
import Map, { NavigationControl, ScaleControl, FullscreenControl, GeolocateControl, Layer, Source } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Layers, Map as MapIcon, ChevronRight, ChevronLeft, Info, Download } from 'lucide-react'

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'

export const MapComponent = () => {
  const [viewState, setViewState] = useState({
    longitude: 108.45,
    latitude: 14.15,
    zoom: 9.5
  })
  
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeLayers, setActiveLayers] = useState({
    provinces: true,
    districts: true,
    roads: true,
    risk: false,
    alerts: false
  })

  const toggleLayer = (layer: keyof typeof activeLayers) => {
    setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }))
  }

  return (
    <div className="relative h-[calc(100vh-64px)] w-full overflow-hidden flex">
      {/* Sidebar */}
      <div className={`bg-white border-r border-[#D9E2DC] transition-all duration-300 z-10 flex flex-col ${sidebarOpen ? 'w-80' : 'w-0'}`}>
        {sidebarOpen && (
          <div className="p-6 flex-1 overflow-y-auto">
            <h2 className="text-xl font-bold text-[#12372A] mb-6 flex items-center gap-2">
              <Layers className="h-5 w-5" /> Layer Control
            </h2>
            
            <div className="space-y-8">
              {/* Administrative */}
              <div>
                <h3 className="text-xs font-bold text-[#5B6472] uppercase tracking-widest mb-4">Administrative</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.provinces} onChange={() => toggleLayer('provinces')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-medium group-hover:text-[#12372A]">Gia Lai Province</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.districts} onChange={() => toggleLayer('districts')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-medium group-hover:text-[#12372A]">K’Bang & Mang Yang</span>
                  </label>
                </div>
              </div>

              {/* Research Layers */}
              <div>
                <h3 className="text-xs font-bold text-[#5B6472] uppercase tracking-widest mb-4">Research Data</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.roads} onChange={() => toggleLayer('roads')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-medium group-hover:text-[#12372A]">OSM Road Network</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.alerts} onChange={() => toggleLayer('alerts')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-medium group-hover:text-[#12372A]">GFW Integrated Alerts</span>
                  </label>
                </div>
              </div>

              {/* Model Outputs */}
              <div>
                <h3 className="text-xs font-bold text-[#B42318] uppercase tracking-widest mb-4">Model Predictions</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={activeLayers.risk} onChange={() => toggleLayer('risk')} className="rounded text-[#12372A] focus:ring-[#12372A]" />
                    <span className="text-sm font-bold group-hover:text-[#B42318]">Deforestation Risk Map</span>
                  </label>
                </div>
                
                {activeLayers.risk && (
                  <div className="mt-4 p-4 bg-[#F5F1E8] rounded-lg border border-[#D9E2DC]">
                    <div className="text-[10px] font-bold text-[#5B6472] uppercase mb-2">Legend</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#B42318]"></div>
                        <span className="text-xs">High Probability (&gt;0.7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#E67700]"></div>
                        <span className="text-xs">Medium Probability (0.4-0.7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#2F9E44]"></div>
                        <span className="text-xs">Low Probability (&lt;0.4)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#D9E2DC]">
              <button className="w-full flex items-center justify-center gap-2 bg-[#F5F1E8] text-[#12372A] py-2 rounded font-bold text-sm hover:bg-[#D9E2DC] transition-colors">
                <Download className="h-4 w-4" /> Download GeoJSON
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
          
          {/* Placeholder for real data sources */}
          {/* 
            <Source id="provinces" type="geojson" data={...}>
              <Layer ... />
            </Source>
          */}
        </Map>

        {/* Info Overlay */}
        <div className="absolute bottom-10 left-10 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-[#D9E2DC] shadow-lg max-w-xs">
          <div className="flex items-center gap-2 text-[#12372A] font-bold mb-2">
            <Info className="h-4 w-4" /> Map Information
          </div>
          <p className="text-[10px] text-[#5B6472]">
            Showing 1 km resolution deforestation risk prediction for Gia Lai pilot area. Data sourced from Hansen GFC, Sentinel-2, and GFW alerts.
          </p>
        </div>
      </div>
    </div>
  )
}
