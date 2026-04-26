import Link from 'next/link'
import { ArrowRight, BarChart3, Globe, Database, ShieldAlert, Users, Layers } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#12372A] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <span className="inline-block py-1 px-3 rounded-full bg-[#52B788] text-[#12372A] text-xs font-bold uppercase tracking-wider mb-6">
              Pilot Study: Gia Lai Province
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Interpretable AI for Deforestation Risk Prediction in Vietnam
            </h1>
            <p className="text-xl text-[#D9E2DC] mb-10 leading-relaxed max-w-2xl">
              A research-driven geospatial platform using satellite data, public environmental datasets, and machine learning to identify deforestation risk and warning zones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/map" className="bg-[#52B788] text-[#12372A] px-8 py-3 rounded-md font-bold hover:bg-white transition-all flex items-center gap-2">
                Explore Interactive Map <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/methodology" className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-[#12372A] transition-all">
                Read Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats / Features */}
      <section className="py-16 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#D9E2DC]">
              <Globe className="h-10 w-10 text-[#12372A] mb-4" />
              <h3 className="text-lg font-bold mb-2">Study Area</h3>
              <p className="text-sm text-[#5B6472]">Gia Lai Pilot: K’Bang and Mang Yang districts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#D9E2DC]">
              <Layers className="h-10 w-10 text-[#12372A] mb-4" />
              <h3 className="text-lg font-bold mb-2">Resolution</h3>
              <p className="text-sm text-[#5B6472]">1 km spatial risk grid using multi-source data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#D9E2DC]">
              <BarChart3 className="h-10 w-10 text-[#12372A] mb-4" />
              <h3 className="text-lg font-bold mb-2">ML Models</h3>
              <p className="text-sm text-[#5B6472]">Baseline, Logistic Regression, and Random Forest.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#D9E2DC]">
              <ShieldAlert className="h-10 w-10 text-[#12372A] mb-4" />
              <h3 className="text-lg font-bold mb-2">Outputs</h3>
              <p className="text-sm text-[#5B6472]">Actionable risk maps and warning-zone layers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Pipeline Workflow</h2>
            <div className="h-1 w-20 bg-[#52B788] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Data Collection', desc: 'Sourcing Hansen GFC, GFW Alerts, Sentinel-2, and SRTM from GEE.' },
              { step: '02', title: 'Feature Engineering', desc: 'Processing spectral indices, terrain, and road distance features.' },
              { step: '03', title: 'Model Training', desc: 'Training interpretable models on historical forest loss labels.' },
              { step: '04', title: 'Risk Mapping', desc: 'Generating spatial probability maps and thresholded warning zones.' }
            ].map((item, idx) => (
              <div key={idx} className="relative group text-center">
                <div className="text-6xl font-serif font-black text-[#F5F1E8] mb-[-2rem] group-hover:text-[#D9E2DC] transition-colors">{item.step}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-[#5B6472] relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Transparency */}
      <section className="py-24 bg-[#12372A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Open Science & Public Data</h2>
              <p className="text-lg text-[#D9E2DC] mb-8 leading-relaxed">
                Our pipeline relies on transparent, publicly available datasets to ensure accountability and reproducibility in forest monitoring.
              </p>
              <div className="space-y-4">
                {[
                  { name: 'Hansen Global Forest Change', source: 'UMD / Google Earth Engine' },
                  { name: 'GFW Integrated Alerts', source: 'Global Forest Watch' },
                  { name: 'Sentinel-2 Spectral Data', source: 'European Space Agency' },
                  { name: 'OpenStreetMap Infrastructure', source: 'OSM Contributors' }
                ].map((d, i) => (
                  <div key={i} className="flex items-center gap-4 bg-[#2D6A4F] p-4 rounded-lg">
                    <Database className="h-6 w-6 text-[#52B788]" />
                    <div>
                      <div className="font-bold">{d.name}</div>
                      <div className="text-xs text-[#D9E2DC]">{d.source}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F5F1E8] p-8 rounded-2xl border border-[#D9E2DC] text-[#12372A]">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="h-8 w-8" />
                Model Performance
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">Random Forest AUC</span>
                    <span className="text-[#2F9E44]">0.92</span>
                  </div>
                  <div className="w-full bg-[#D9E2DC] h-3 rounded-full overflow-hidden">
                    <div className="bg-[#52B788] h-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">Logistic Regression AUC</span>
                    <span className="text-[#2F9E44]">0.88</span>
                  </div>
                  <div className="w-full bg-[#D9E2DC] h-3 rounded-full overflow-hidden">
                    <div className="bg-[#52B788] h-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#D9E2DC]">
                  <p className="text-sm text-[#5B6472]">
                    Performance verified through cross-district validation and historical capture rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-white border-b border-[#D9E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-[#12372A] mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold mb-4">Developed by Environmental AI Researchers</h2>
          <p className="text-xl text-[#5B6472] mb-10 max-w-2xl mx-auto">
            A collaborative effort to bring state-of-the-art machine learning to transparent forest management in Vietnam.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/team" className="btn-primary">Meet the Team</Link>
            <Link href="/publication" className="btn-secondary">View Publication</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
