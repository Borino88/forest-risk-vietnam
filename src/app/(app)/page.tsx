import Link from 'next/link'
import { ArrowRight, BarChart3, Globe, Database, ShieldAlert, Users, Layers, AlertCircle, MapPin, Cpu, Search, FileCode, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <article className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#12372A] py-20 lg:py-32 overflow-hidden" aria-label="Introduction">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#52B788]/20 border border-[#52B788]/30 text-[#52B788] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="h-2 w-2 rounded-full bg-[#52B788] animate-pulse"></span>
              Pilot Implementation: Gia Lai Province
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Interpretable AI for Forest Risk Assessment
            </h1>
            <p className="text-lg lg:text-xl text-[#D9E2DC] mb-10 leading-relaxed max-w-2xl font-light">
              Advancing proactive forest monitoring through a high-resolution machine learning pipeline that forecasts deforestation probability using multi-temporal satellite data and environmental drivers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/map" className="bg-[#52B788] text-[#12372A] px-8 py-3.5 rounded-xl font-bold hover:bg-white transition-all flex items-center gap-2 no-underline shadow-xl shadow-[#52B788]/10">
                Interactive Risk Map <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/Borino88/deforestation-risk-gialai" target="_blank" className="bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all no-underline flex items-center gap-2">
                <FileCode className="h-5 w-5" /> Open Source Code
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Scope Banner */}
      <section className="bg-[#B42318] py-3 text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.1em] uppercase">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          <span>Validated for K’Bang & Mang Yang districts, Gia Lai Province</span>
        </div>
      </section>

      {/* Study Area & Environmental Context */}
      <section className="py-20 bg-white" aria-labelledby="study-area">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="study-area" className="text-3xl font-serif font-bold text-[#12372A] mb-6">Study Area: Vietnam’s Central Highlands</h2>
              <p className="text-base text-[#5B6472] leading-relaxed mb-6 text-justify">
                The Central Highlands represent a critical intersection of high-biodiversity primary forests and intensive agricultural expansion. Gia Lai Province was selected as our pilot implementation site due to its ecological significance and historically documented deforestation pressures.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#FAFAF7] border border-[#D9E2DC]">
                  <div className="text-[#12372A] font-bold text-sm mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#52B788]" /> K’Bang District
                  </div>
                  <p className="text-xs text-[#5B6472]">Characterized by significant primary forest cover and the presence of protected areas requiring precise risk-based monitoring.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#FAFAF7] border border-[#D9E2DC]">
                  <div className="text-[#12372A] font-bold text-sm mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#52B788]" /> Mang Yang District
                  </div>
                  <p className="text-xs text-[#5B6472]">A dynamic landscape experiencing rapid land-use conversion, providing an ideal test case for infrastructure-driven risk modeling.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAF7] p-4 rounded-[2.5rem] border border-[#D9E2DC] shadow-inner">
               <div className="aspect-square bg-[#12372A] rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000')] bg-cover" />
                  <div className="relative z-10 text-center px-10">
                     <Globe className="h-16 w-16 text-[#52B788] mx-auto mb-6" />
                     <h3 className="text-white font-bold text-xl mb-4">Spatial Risk Architecture</h3>
                     <p className="text-[#D9E2DC] text-sm italic leading-relaxed">
                       "Modeling the spatial probability of forest loss at a unified 1 km resolution across heterogeneous landscapes."
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-[#FAFAF7] border-y border-[#D9E2DC]" aria-labelledby="ml-pipeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 id="ml-pipeline" className="text-3xl font-serif font-bold text-[#12372A] mb-4 uppercase tracking-tight">The Machine Learning Pipeline</h2>
          <p className="text-[#5B6472] max-w-2xl mx-auto leading-relaxed text-sm uppercase tracking-widest font-bold">
            Bridging satellite imagery and proactive conservation intelligence
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6">
                <Database className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#12372A]">Data Harmonization</h3>
              <p className="text-xs text-[#5B6472] leading-relaxed mb-6">
                Integration of Hansen GFC labels, Sentinel-2 spectral indices (NDVI/NBR), CHIRPS rainfall data, and SRTM topography into a synchronized 1 km spatial grid via Google Earth Engine.
              </p>
              <div className="mt-auto pt-4 border-t border-[#F5F1E8] w-full flex justify-center gap-2">
                 <span className="text-[10px] font-bold text-[#12372A] bg-[#F5F1E8] px-2 py-1 rounded">Sentinel-2</span>
                 <span className="text-[10px] font-bold text-[#12372A] bg-[#F5F1E8] px-2 py-1 rounded">Hansen GFC</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] flex flex-col items-center text-center scale-105 border-b-[#52B788] border-b-4">
              <div className="h-12 w-12 rounded-xl bg-[#12372A] flex items-center justify-center text-[#52B788] mb-6">
                <Cpu className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#12372A]">Interpretable Modeling</h3>
              <p className="text-xs text-[#5B6472] leading-relaxed mb-6">
                Comparative evaluation of Random Forest for high-accuracy discriminative performance and Logistic Regression for transparent coefficient analysis of environmental drivers.
              </p>
              <div className="mt-auto pt-4 border-t border-[#F5F1E8] w-full flex justify-center gap-2">
                 <span className="text-[10px] font-bold text-[#52B788] bg-[#12372A] px-2 py-1 rounded uppercase tracking-wider">RF 0.89 AUC</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E2DC] flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] mb-6">
                <Search className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#12372A]">Output Validation</h3>
              <p className="text-xs text-[#5B6472] leading-relaxed mb-6">
                Rigorous assessment using historical hold-out test sets and spatial transferability tests. Generation of continuous probability maps and top-tier warning zones.
              </p>
              <div className="mt-auto pt-4 border-t border-[#F5F1E8] w-full flex justify-center gap-2">
                 <span className="text-[10px] font-bold text-[#12372A] bg-[#F5F1E8] px-2 py-1 rounded">ROC Analysis</span>
                 <span className="text-[10px] font-bold text-[#12372A] bg-[#F5F1E8] px-2 py-1 rounded">Capture @ 10%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistical Evidence / Visuals */}
      <section className="py-20 bg-white" aria-labelledby="research-outputs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 text-[#52B788] font-bold uppercase tracking-widest text-xs mb-4">
                  <CheckCircle className="h-4 w-4" aria-hidden="true" /> Experimental Results
                </div>
                <h2 id="research-outputs" className="text-3xl font-serif font-bold text-[#12372A] mb-6 leading-tight">Quantifying Deforestation Risk</h2>
                <p className="text-base text-[#5B6472] mb-8 leading-relaxed text-justify">
                  Our results demonstrate that human accessibility (road proximity) and vegetation condition (spectral indices) are the primary predictors of forest loss risk in the Gia Lai pilot region. The Random Forest model achieved an AUC of 0.892, indicating robust spatial generalization across district boundaries.
                </p>
                <div className="space-y-4">
                   <div className="flex justify-between items-center py-3 border-b border-[#F5F1E8]">
                      <span className="text-sm font-medium text-[#12372A]">Total Test Samples (N)</span>
                      <span className="text-sm font-mono text-[#5B6472]">1,212 Cells</span>
                   </div>
                   <div className="flex justify-between items-center py-3 border-b border-[#F5F1E8]">
                      <span className="text-sm font-medium text-[#12372A]">Random Forest AUC-ROC</span>
                      <span className="text-sm font-mono text-[#2F9E44] font-bold">0.892</span>
                   </div>
                   <div className="flex justify-between items-center py-3 border-b border-[#F5F1E8]">
                      <span className="text-sm font-medium text-[#12372A]">Logistic Regression AUC-ROC</span>
                      <span className="text-sm font-mono text-[#5B6472]">0.788</span>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                 <div className="aspect-[4/5] bg-[#FAFAF7] rounded-3xl border border-[#D9E2DC] p-3 flex flex-col shadow-sm">
                    <div className="flex-1 rounded-2xl overflow-hidden bg-[#12372A] flex items-center justify-center p-2">
                       <img src="/data/figures/Figure_ROC_split_HansenLoss.png" alt="ROC Curve" className="w-full h-full object-contain brightness-110 contrast-110" />
                    </div>
                    <div className="pt-3 text-center">
                       <p className="text-[10px] font-bold text-[#12372A] uppercase tracking-wider">Model Validation (ROC)</p>
                    </div>
                 </div>
                 <div className="aspect-[4/5] bg-[#FAFAF7] rounded-3xl border border-[#D9E2DC] p-3 mt-8 flex flex-col shadow-sm">
                    <div className="flex-1 rounded-2xl overflow-hidden bg-[#12372A] flex items-center justify-center p-2 text-white">
                       <img src="/data/figures/Figure6_RF_importance.png" alt="Feature Importance" className="w-full h-full object-contain" />
                    </div>
                    <div className="pt-3 text-center">
                       <p className="text-[10px] font-bold text-[#12372A] uppercase tracking-wider">Feature Importance (RF)</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Reproducibility Section */}
      <section className="py-20 bg-[#12372A] text-white overflow-hidden" aria-labelledby="open-science">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Layers className="h-64 w-64 text-[#52B788]" aria-hidden="true" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1">
                <h2 id="open-science" className="text-3xl font-serif font-bold mb-6">Reproducibility & Open Science</h2>
                <p className="text-[#D9E2DC] text-base leading-relaxed mb-8 font-light italic">
                  Transparency is fundamental to reproducible environmental research. We provide the full computational pipeline, training datasets, and spatial outputs under an open-source framework.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a href="https://github.com/Borino88/deforestation-risk-gialai" target="_blank" className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all group no-underline">
                     <FileCode className="h-8 w-8 text-[#52B788]" />
                     <div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider">Source Repository</div>
                        <div className="text-xs text-[#D9E2DC] group-hover:text-white">Access scripts & raw results</div>
                     </div>
                  </a>
                  <a href="https://colab.research.google.com/github/Borino88/deforestation-risk-gialai/blob/main/notebooks/run_in_colab.ipynb" target="_blank" className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all group no-underline">
                     <Layers className="h-8 w-8 text-[#52B788]" />
                     <div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider">Automated Workflow</div>
                        <div className="text-xs text-[#D9E2DC] group-hover:text-white">Run the pipeline in Colab</div>
                     </div>
                  </a>
                </div>
             </div>
             <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-10 w-10 rounded-full bg-[#52B788] flex items-center justify-center text-[#12372A]">
                      <CheckCircle className="h-6 w-6" />
                   </div>
                   <span className="text-xl font-bold uppercase tracking-tight">Pipeline Metrics Verified</span>
                </div>
                <div className="space-y-4">
                   <div className="h-1.5 w-48 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[89.2%] bg-[#52B788]"></div>
                   </div>
                   <div className="h-1.5 w-48 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[78.8%] bg-[#52B788] opacity-50"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-white" aria-labelledby="academic-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-[#F5F1E8] pt-20">
          <div className="h-16 w-16 rounded-2xl bg-[#FAFAF7] border border-[#D9E2DC] flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Users className="h-8 w-8 text-[#12372A]" aria-hidden="true" />
          </div>
          <h2 id="academic-team" className="text-3xl font-serif font-bold mb-6 text-[#12372A]">Student Research & Academic Oversight</h2>
          <p className="text-lg text-[#5B6472] mb-12 max-w-3xl mx-auto leading-relaxed italic">
            A collaborative effort by an interdisciplinary team from The Olympia School, Vinschool, and Foreign Language Specialized School, supervised by the SMART LAB at FPT University.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/team" className="bg-[#12372A] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#2D6A4F] transition-all no-underline shadow-lg shadow-[#12372A]/10">
              Meet the Research Team
            </Link>
            <Link href="/results" className="bg-white border-2 border-[#12372A] text-[#12372A] px-8 py-3.5 rounded-xl font-bold hover:bg-[#F5F1E8] transition-all no-underline">
              Detailed Validation Results
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}


