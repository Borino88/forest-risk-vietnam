import Link from 'next/link'
import { ArrowRight, BarChart3, Globe, Database, ShieldAlert, Users, Layers, AlertCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#12372A] py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-3/4">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#52B788]/20 border border-[#52B788]/30 text-[#52B788] text-xs font-bold uppercase tracking-widest mb-8">
              <span className="h-2 w-2 rounded-full bg-[#52B788] animate-pulse"></span>
              Gia Lai Pilot Implementation
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              An Interpretable Pipeline for Deforestation Risk
            </h1>
            <p className="text-xl lg:text-2xl text-[#D9E2DC] mb-12 leading-relaxed max-w-3xl font-light">
              Advancing proactive forest conservation in Vietnam through multi-source satellite data and interpretable machine learning at 1 km resolution.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/map" className="bg-[#52B788] text-[#12372A] px-10 py-4 rounded-xl font-bold hover:bg-white transition-all flex items-center gap-3 no-underline shadow-xl shadow-[#52B788]/10">
                Explore Risk Map <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/publication" className="bg-white/5 border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all no-underline">
                View Publication
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Scope Banner */}
      <section className="bg-[#B42318] py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 text-sm font-bold tracking-wide">
          <AlertCircle className="h-5 w-5" />
          <span>CURRENT SCOPE: PILOT IMPLEMENTATION FOR K’BANG & MANG YANG DISTRICTS</span>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] group hover:border-[#52B788] transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6 group-hover:bg-[#12372A] group-hover:text-white transition-all">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-3">Study Area</h3>
              <p className="text-sm text-[#5B6472] leading-relaxed">Gia Lai Pilot: Spatial focus on K’Bang and Mang Yang districts.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] group hover:border-[#52B788] transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6 group-hover:bg-[#12372A] group-hover:text-white transition-all">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-3">1 km Resolution</h3>
              <p className="text-sm text-[#5B6472] leading-relaxed">Harmonized grid integration for district-scale monitoring.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] group hover:border-[#52B788] transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6 group-hover:bg-[#12372A] group-hover:text-white transition-all">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-3">Interpretable AI</h3>
              <p className="text-sm text-[#5B6472] leading-relaxed">Prioritizing models that reveal the drivers of forest risk.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] group hover:border-[#52B788] transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6 group-hover:bg-[#12372A] group-hover:text-white transition-all">
                <ShieldAlert className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-3">Warning Zones</h3>
              <p className="text-sm text-[#5B6472] leading-relaxed">Statistically derived hotspots for conservation prioritization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Transparency Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#52B788] opacity-5 rounded-full"></div>
              <h2 className="text-4xl font-serif font-bold mb-8 text-[#12372A] relative z-10">Scalable & Reproducible Monitoring</h2>
              <p className="text-lg text-[#5B6472] mb-10 leading-relaxed relative z-10 text-justify">
                Our platform integrates multi-source public datasets (Hansen GFC, GFW, Sentinel-2, SRTM) to ensure that forest risk predictions are both scientifically robust and transparent.
              </p>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-5 p-6 bg-[#FAFAF7] rounded-2xl border border-[#D9E2DC]">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><Database className="h-6 w-6 text-[#12372A]" /></div>
                  <div>
                    <div className="font-bold text-[#12372A]">Public Data Architecture</div>
                    <div className="text-xs text-[#5B6472]">Built on Google Earth Engine (GEE) open-source pipelines.</div>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-6 bg-[#FAFAF7] rounded-2xl border border-[#D9E2DC]">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><Layers className="h-6 w-6 text-[#12372A]" /></div>
                  <div>
                    <div className="font-bold text-[#12372A]">Multispectral Features</div>
                    <div className="text-xs text-[#5B6472]">Incorporating NDVI, NBR, and road-distance accessibility factors.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#12372A] p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl relative">
              <div className="absolute top-0 right-0 p-8 opacity-10"><BarChart3 className="h-32 w-32" /></div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-[#52B788]" />
                Model Validation
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3 items-end">
                    <span className="font-bold text-sm uppercase tracking-widest text-[#D9E2DC]">Random Forest (RF)</span>
                    <span className="text-2xl font-serif font-bold text-[#52B788]">0.892 AUC</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#52B788] h-full" style={{ width: '89.2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3 items-end">
                    <span className="font-bold text-sm uppercase tracking-widest text-[#D9E2DC]">Logistic Regression</span>
                    <span className="text-2xl font-serif font-bold text-[#52B788]">0.788 AUC</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#52B788] h-full" style={{ width: '78.8%' }}></div>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/10 mt-8">
                  <p className="text-sm text-[#D9E2DC] leading-relaxed italic">
                    "Validated across 1 km² grid cells in Gia Lai Province using a 30% hold-out test split (2023)."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-20 w-20 rounded-3xl bg-white border border-[#D9E2DC] flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Users className="h-10 w-10 text-[#12372A]" />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-6 text-[#12372A]">Academic Collaboration</h2>
          <p className="text-xl text-[#5B6472] mb-12 max-w-3xl mx-auto leading-relaxed">
            A research effort by students from The Olympia School, Vinschool, and Foreign Language Specialized School, supervised by experts from FPT University.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/results" className="bg-[#12372A] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#2D6A4F] transition-all no-underline shadow-lg shadow-[#12372A]/10">
              View Detailed Results
            </Link>
            <Link href="/publication" className="bg-white border-2 border-[#12372A] text-[#12372A] px-10 py-4 rounded-xl font-bold hover:bg-[#F5F1E8] transition-all no-underline">
              Publication Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
