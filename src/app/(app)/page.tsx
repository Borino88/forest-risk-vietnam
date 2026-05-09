import Link from 'next/link'
import { ArrowRight, BarChart3, Globe, Database, ShieldAlert, Users, Layers, AlertCircle, MapPin, Cpu, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <article className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#12372A] py-24 lg:py-36 overflow-hidden" aria-label="Introduction">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-3/4">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#52B788]/20 border border-[#52B788]/30 text-[#52B788] text-xs font-bold uppercase tracking-widest mb-8">
              <span className="h-2 w-2 rounded-full bg-[#52B788] animate-pulse"></span>
              Gia Lai Pilot Implementation
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Predictive AI for Forest Conservation
            </h1>
            <p className="text-xl lg:text-2xl text-[#D9E2DC] mb-12 leading-relaxed max-w-3xl font-light">
              An interpretable machine learning pipeline forecasting deforestation risk in Vietnam at a 1 km spatial resolution, integrating multi-source satellite and environmental data.
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

      {/* Overview Section */}
      <section className="py-20 bg-white" aria-labelledby="project-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="project-overview" className="text-3xl font-serif font-bold text-[#12372A] mb-6">Shifting from Detection to Prediction</h2>
            <p className="text-lg text-[#5B6472] leading-relaxed">
              Traditional forest monitoring relies on retrospective analysis—detecting loss after it has occurred. This research introduces a proactive framework, utilizing interpretable machine learning to identify high-risk zones before deforestation events happen, enabling targeted conservation interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-24 bg-[#FAFAF7] border-y border-[#D9E2DC]" aria-labelledby="methodology-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="methodology-overview" className="sr-only">Methodology and Data Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] group hover:border-[#52B788] transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6 group-hover:bg-[#12372A] group-hover:text-white transition-all">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#12372A]">Why Gia Lai?</h3>
              <p className="text-sm text-[#5B6472] leading-relaxed">
                Gia Lai Province, specifically K’Bang and Mang Yang districts, represents a critical intersection of primary forest cover and rapid agricultural expansion, making it an ideal pilot location for risk modeling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] group hover:border-[#52B788] transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6 group-hover:bg-[#12372A] group-hover:text-white transition-all">
                <Database className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#12372A]">Multi-Source Data</h3>
              <p className="text-sm text-[#5B6472] leading-relaxed">
                Integrating Hansen Global Forest Change, Sentinel-2 spectral indices (NDVI, NBR), SRTM topography, and OSM road proximity data into a unified 1 km grid via Google Earth Engine.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] group hover:border-[#52B788] transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6 group-hover:bg-[#12372A] group-hover:text-white transition-all">
                <Cpu className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#12372A]">Interpretable AI</h3>
              <p className="text-sm text-[#5B6472] leading-relaxed">
                Comparing Random Forest for robust discriminative performance against Logistic Regression for clear, transparent analysis of risk drivers and coefficients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] group hover:border-[#52B788] transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6 group-hover:bg-[#12372A] group-hover:text-white transition-all">
                <ShieldAlert className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#12372A]">Warning Zones</h3>
              <p className="text-sm text-[#5B6472] leading-relaxed">
                Translating continuous probability scores into actionable spatial intelligence, highlighting the top 10% highest-risk areas for prioritization.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Model Performance */}
      <section className="py-24 bg-white overflow-hidden" aria-labelledby="model-performance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#52B788] opacity-5 rounded-full" aria-hidden="true"></div>
              <h2 id="model-performance" className="text-4xl font-serif font-bold mb-8 text-[#12372A] relative z-10">Scientifically Validated Accuracy</h2>
              <p className="text-lg text-[#5B6472] mb-8 leading-relaxed relative z-10 text-justify">
                The predictive pipeline was rigorously evaluated using historical hold-out test sets across the pilot districts. The Random Forest model demonstrated superior spatial transferability and discriminative power in identifying complex risk patterns.
              </p>
              <Link href="/methodology" className="inline-flex items-center gap-2 font-bold text-[#12372A] hover:text-[#52B788] transition-colors">
                Review our methodology <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-[#12372A] p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl relative">
              <div className="absolute top-0 right-0 p-8 opacity-10" aria-hidden="true"><BarChart3 className="h-32 w-32" /></div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-[#52B788]" aria-hidden="true" />
                Key Validation Metrics
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3 items-end">
                    <span className="font-bold text-sm uppercase tracking-widest text-[#D9E2DC]">Random Forest (AUC-ROC)</span>
                    <span className="text-2xl font-serif font-bold text-[#52B788]">0.892</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden" aria-hidden="true">
                    <div className="bg-[#52B788] h-full" style={{ width: '89.2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3 items-end">
                    <span className="font-bold text-sm uppercase tracking-widest text-[#D9E2DC]">Logistic Regression (AUC-ROC)</span>
                    <span className="text-2xl font-serif font-bold text-[#52B788]">0.788</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden" aria-hidden="true">
                    <div className="bg-[#52B788] h-full" style={{ width: '78.8%' }}></div>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/10 mt-8">
                  <p className="text-sm text-[#D9E2DC] leading-relaxed italic">
                    Derived from 30% hold-out evaluation on 1 km resolution data within the Gia Lai pilot region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-[#12372A] text-white" aria-labelledby="future-roadmap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="future-roadmap" className="text-3xl font-serif font-bold mb-6">Future Expansion Roadmap</h2>
            <p className="text-lg text-[#D9E2DC] max-w-2xl mx-auto">
              Moving beyond the current pilot phase, our goal is to scale this predictive architecture to support national conservation strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-[#2D6A4F] z-0" aria-hidden="true"></div>

            {[
              { phase: 'Phase 1', title: 'Gia Lai Pilot (Active)', desc: 'Proof-of-concept in K’Bang and Mang Yang. Establishing data pipelines, baseline models, and open-source reproducibility.', icon: <MapPin className="h-6 w-6" /> },
              { phase: 'Phase 2', title: 'Central Highlands', desc: 'Expansion to neighboring provinces, incorporating CHIRPS rainfall and dynamic temporal alerting windows.', icon: <Layers className="h-6 w-6" /> },
              { phase: 'Phase 3', title: 'National Coverage', desc: 'Deployment of a high-performance computing pipeline covering all forested regions in Vietnam for continuous monitoring.', icon: <TrendingUp className="h-6 w-6" /> }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 bg-[#1A4B3A] p-8 rounded-3xl border border-[#2D6A4F]">
                <div className="h-12 w-12 rounded-full bg-[#52B788] text-[#12372A] flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-[#52B788] uppercase tracking-widest mb-2 text-center md:text-left">{step.phase}</div>
                <h3 className="text-xl font-bold mb-4 text-center md:text-left">{step.title}</h3>
                <p className="text-[#D9E2DC] text-sm leading-relaxed text-center md:text-left">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Collaboration */}
      <section className="py-24 bg-[#FAFAF7]" aria-labelledby="academic-collaboration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-20 w-20 rounded-3xl bg-white border border-[#D9E2DC] flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Users className="h-10 w-10 text-[#12372A]" aria-hidden="true" />
          </div>
          <h2 id="academic-collaboration" className="text-4xl font-serif font-bold mb-6 text-[#12372A]">A Collaborative Research Effort</h2>
          <p className="text-xl text-[#5B6472] mb-12 max-w-3xl mx-auto leading-relaxed">
            Developed by an interdisciplinary team of student researchers from The Olympia School, Vinschool, and Foreign Language Specialized School, under the supervision of FPT University.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/team" className="bg-[#12372A] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#2D6A4F] transition-all no-underline shadow-lg shadow-[#12372A]/10">
              Meet the Team
            </Link>
            <Link href="/project" className="bg-white border border-[#D9E2DC] text-[#12372A] px-10 py-4 rounded-xl font-bold hover:bg-[#F5F1E8] transition-all no-underline">
              Read the Project Scope
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

