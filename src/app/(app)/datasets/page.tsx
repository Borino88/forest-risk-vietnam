import { Database, ExternalLink, Info } from 'lucide-react'

export default function DatasetsPage() {
  const datasets = [
    {
      title: 'Hansen Global Forest Change',
      source: 'University of Maryland / GEE',
      resolution: '30m (resampled to 1km)',
      role: 'Baseline forest cover (treecover2000) and forest loss labels.',
      link: 'https://earthenginepartners.appspot.com/science-2013-global-forest'
    },
    {
      title: 'GFW Integrated Alerts',
      source: 'Global Forest Watch',
      resolution: 'Daily/Weekly signals',
      role: 'Near-real-time deforestation evidence used as model features.',
      link: 'https://www.globalforestwatch.org/'
    },
    {
      title: 'Sentinel-2 Multispectral',
      source: 'European Space Agency (ESA)',
      resolution: '10m-60m',
      role: 'Spectral bands (B2-B12) and indices like NDVI and NBR.',
      link: 'https://sentinel.esa.int/web/sentinel/missions/sentinel-2'
    },
    {
      title: 'SRTM Digital Elevation',
      source: 'NASA / USGS',
      resolution: '30m',
      role: 'Terrain slope and accessibility pressure features.',
      link: 'https://www2.jpl.nasa.gov/srtm/'
    },
    {
      title: 'OpenStreetMap Roads',
      source: 'OSM Contributors',
      resolution: 'Vector',
      role: 'Road networks and distance to nearest infrastructure.',
      link: 'https://www.openstreetmap.org/'
    }
  ]

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6">Data Transparency</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Our research is built entirely on public geospatial and satellite datasets, ensuring that our methodology can be audited and reproduced by the scientific community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {datasets.map((d, i) => (
            <div key={i} className="bg-[#FAFAF7] p-8 rounded-2xl border border-[#D9E2DC] flex flex-col justify-between group hover:border-[#12372A] transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Database className="h-8 w-8 text-[#12372A]" />
                  <a href={d.link} target="_blank" rel="noopener noreferrer" className="text-[#5B6472] hover:text-[#12372A]">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#12372A] transition-colors">{d.title}</h3>
                <div className="flex gap-4 text-xs font-bold text-[#5B6472] mb-6 uppercase tracking-wider">
                  <span>{d.source}</span>
                  <span>•</span>
                  <span>{d.resolution}</span>
                </div>
                <p className="text-[#5B6472] text-sm leading-relaxed mb-6">
                  {d.role}
                </p>
              </div>
              <div className="pt-4 border-t border-[#D9E2DC] flex items-center gap-2 text-xs text-[#12372A] font-bold">
                <Info className="h-4 w-4" /> Public Domain / Open License
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#12372A] text-white p-12 rounded-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Future Data Integration</h2>
            <p className="text-[#D9E2DC] text-sm leading-relaxed">
              As we scale to national coverage, we plan to incorporate CHIRPS rainfall data, population density layers from WorldPop, and official protected-area boundaries from the WDPA.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-[#52B788] text-[#12372A] px-6 py-2 rounded font-bold hover:bg-white transition-all">
              Request Dataset Access
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
