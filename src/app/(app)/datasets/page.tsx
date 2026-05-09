import { Database, ExternalLink, Info, Github } from 'lucide-react'

export const metadata = {
  title: 'Data Transparency & Public Datasets',
  description: 'Detailed breakdown of the open-source, global datasets used to power the Forest Risk Vietnam deforestation monitoring pipeline.',
}

export default function DatasetsPage() {
  const datasets = [
    {
      title: 'Hansen Global Forest Change',
      source: 'University of Maryland / GEE',
      resolution: '30m (resampled to 1km)',
      role: 'Baseline forest cover (treecover2000) and historical forest loss labels.',
      link: 'https://earthenginepartners.appspot.com/science-2013-global-forest'
    },
    {
      title: 'GFW Integrated Alerts',
      source: 'Global Forest Watch',
      resolution: 'Daily/Weekly signals',
      role: 'Near-real-time deforestation evidence utilized as predictive features.',
      link: 'https://www.globalforestwatch.org/'
    },
    {
      title: 'Sentinel-2 Multispectral',
      source: 'European Space Agency (ESA)',
      resolution: '10m-60m',
      role: 'Spectral bands (B2-B12) and derived indices including NDVI and NBR.',
      link: 'https://sentinel.esa.int/web/sentinel/missions/sentinel-2'
    },
    {
      title: 'SRTM Digital Elevation',
      source: 'NASA / USGS',
      resolution: '30m',
      role: 'Terrain slope and accessibility pressure features derived from elevation.',
      link: 'https://www2.jpl.nasa.gov/srtm/'
    },
    {
      title: 'OpenStreetMap Roads',
      source: 'OSM Contributors',
      resolution: 'Vector',
      role: 'Road networks to compute Euclidean distance to nearest infrastructure.',
      link: 'https://www.openstreetmap.org/'
    }
  ]

  return (
    <article className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6 text-[#12372A]">Data Transparency</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Our predictive modeling pipeline is engineered exclusively on public geospatial and satellite datasets, ensuring that our methodology can be audited, reproduced, and scaled by the broader scientific community.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20" aria-label="Dataset Index">
          {datasets.map((d, i) => (
            <div key={i} className="bg-[#FAFAF7] p-8 rounded-3xl border border-[#D9E2DC] flex flex-col justify-between group hover:border-[#52B788] hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-white border border-[#D9E2DC] flex items-center justify-center text-[#12372A] group-hover:bg-[#12372A] group-hover:text-white transition-colors">
                    <Database className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <a href={d.link} target="_blank" rel="noopener noreferrer" className="text-[#5B6472] hover:text-[#52B788] transition-colors" aria-label={`External link to ${d.title}`}>
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-[#12372A] group-hover:text-[#52B788] transition-colors">{d.title}</h2>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-[#5B6472] mb-6 uppercase tracking-widest">
                  <span className="text-[#12372A]">{d.source}</span>
                  <span aria-hidden="true">•</span>
                  <span>{d.resolution}</span>
                </div>
                <p className="text-[#5B6472] text-sm leading-relaxed mb-6">
                  {d.role}
                </p>
              </div>
              <div className="pt-5 border-t border-[#D9E2DC] flex items-center gap-2 text-xs text-[#12372A] font-bold uppercase tracking-widest">
                <Info className="h-4 w-4 text-[#52B788]" aria-hidden="true" /> Open License
              </div>
            </div>
          ))}
        </section>

        <section className="bg-[#12372A] text-white p-12 lg:p-16 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden" aria-labelledby="repo-access">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#52B788] opacity-10 rounded-full -mr-32 -mt-32" aria-hidden="true"></div>
          <div className="flex-1 relative z-10">
            <h2 id="repo-access" className="text-3xl font-bold mb-6">Open Research Repository</h2>
            <p className="text-[#D9E2DC] text-base leading-relaxed mb-6">
              The processed 1 km resolution analytical master tables for the K’Bang and Mang Yang pilot areas, which merge all aforementioned sources, are available directly within our GitHub repository.
            </p>
            <p className="text-xs text-[#52B788] uppercase tracking-widest font-bold">
              Available for non-commercial academic research and replication.
            </p>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <a href="https://github.com/Borino88/deforestation-risk-gialai/tree/main/data" target="_blank" rel="noopener noreferrer" className="bg-[#52B788] text-[#12372A] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all flex items-center gap-3 no-underline shadow-lg shadow-[#52B788]/20">
              Access Data on GitHub <Github className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}
