import Link from 'next/link'
import { Cpu, Database, Filter, Layers, Zap, Table, Target, BarChart4 } from 'lucide-react'

export const metadata = {
  title: 'Computational Methodology',
  description: 'A detailed breakdown of the machine learning pipeline and geospatial data processing used for deforestation risk assessment.',
}

export default function MethodologyPage() {
  return (
    <article className="bg-[#FAFAF7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 border-b border-[#D9E2DC] pb-12">
          <div className="inline-flex items-center gap-2 text-[#52B788] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
            Technical Framework
          </div>
          <h1 className="text-4xl font-serif font-bold mb-6 text-[#12372A]">Computational Methodology & Pipeline Architecture</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Integrating multi-temporal satellite sensors and proximity-based features into a unified 1 km analytical grid for high-resolution risk prediction.
          </p>
        </header>

        <div className="space-y-20">
          {/* Section 1: Data Architecture */}
          <section aria-labelledby="data-architecture">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#12372A] rounded-lg">
                 <Database className="h-5 w-5 text-[#52B788]" aria-hidden="true" />
              </div>
              <h2 id="data-architecture" className="text-2xl font-bold text-[#12372A]">01. Multi-Source Data Integration</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="prose prose-forest text-[#5B6472]">
                <p className="mb-6 leading-relaxed text-justify text-sm">
                  Our pipeline leverages the computational power of Google Earth Engine to harmonize disparate geospatial datasets. The core challenge addressed is the alignment of heterogeneous spatial and temporal resolutions—ranging from 10m Sentinel-2 bands to 30m SRTM terrain data—into a standardized 1 km resolution analytical master table.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-[#D9E2DC] shadow-sm">
                  <h3 className="font-bold text-[#12372A] mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
                    <Table className="h-4 w-4" /> Feature Engineering Matrix
                  </h3>
                  <div className="space-y-3">
                    {[
                      { cat: 'Spectral', features: 'NDVI, NBR, B2-B12 Bands' },
                      { cat: 'Disturbance', features: 'GFW Integrated Alerts (Count/Density)' },
                      { cat: 'Anthropogenic', features: 'Euclidean distance to road networks' },
                      { cat: 'Environmental', features: 'Slope, Elevation, Mean Rainfall' }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between text-[11px] border-b border-[#F5F1E8] pb-2 last:border-0 last:pb-0">
                        <span className="font-bold text-[#12372A] uppercase">{row.cat}</span>
                        <span className="text-[#5B6472] font-mono">{row.features}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-[#12372A] p-8 rounded-3xl text-white flex flex-col justify-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Layers className="h-32 w-32" />
                </div>
                <h3 className="text-[#52B788] font-bold mb-6 uppercase text-xs tracking-[0.2em]">The 1 km Analytical Grid</h3>
                <p className="text-sm leading-relaxed mb-6 font-light">
                  To ensure scientific rigor and policy relevance, we resample all input rasters to a unified 1 km² resolution. This grid size acts as a spatial filter, reducing the impact of satellite sensor noise and localized cloud interference while maintaining sufficient resolution for district-level prioritization.
                </p>
                <div className="flex gap-2">
                   <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">GEE Pre-processing</span>
                   <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">Spatial Join</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: ML Modeling */}
          <section aria-labelledby="modeling-strategy">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#12372A] rounded-lg">
                 <Cpu className="h-5 w-5 text-[#52B788]" aria-hidden="true" />
              </div>
              <h2 id="modeling-strategy" className="text-2xl font-bold text-[#12372A]">02. Statistical Modeling & Interpretability</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-[#F5F1E8] p-8 rounded-3xl border border-[#D9E2DC] flex flex-col justify-center">
                 <h3 className="text-[#12372A] font-bold mb-6 uppercase text-xs tracking-widest">Algorithm Performance Hierarchy</h3>
                 <div className="space-y-4">
                    <div className="p-5 bg-white rounded-2xl border border-[#D9E2DC] shadow-sm">
                       <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-sm text-[#12372A]">Random Forest (RF)</span>
                          <span className="text-[10px] font-bold text-[#52B788] uppercase">Best Precision</span>
                       </div>
                       <p className="text-xs text-[#5B6472] leading-relaxed">Captures non-linear dependencies between topography and road-distance pressures. Validated at 0.89 AUC.</p>
                    </div>
                    <div className="p-5 bg-white rounded-2xl border border-[#D9E2DC] shadow-sm">
                       <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-sm text-[#12372A]">Logistic Regression (LogReg)</span>
                          <span className="text-[10px] font-bold text-[#E67700] uppercase">Interpretable</span>
                       </div>
                       <p className="text-xs text-[#5B6472] leading-relaxed">Utilized for coefficient analysis to determine the relative contribution of individual risk drivers.</p>
                    </div>
                 </div>
              </div>
              <div className="prose prose-forest text-[#5B6472]">
                <p className="mb-8 leading-relaxed text-justify text-sm">
                  Modeling is performed using a binary classification approach, where the target label is derived from the Hansen Global Forest Change "lossyear" dataset. We train the models to predict the probability of forest loss occurring within each grid cell based on its unique environmental and accessibility profile.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#FAFAF7] border border-[#D9E2DC] flex items-center justify-center flex-shrink-0">
                       <BarChart4 className="h-5 w-5 text-[#12372A]" />
                    </div>
                    <div>
                       <h4 className="font-bold text-[#12372A] text-sm">AUC-ROC Optimization</h4>
                       <p className="text-xs leading-relaxed">Models are tuned to maximize the Area Under the Receiver Operating Characteristic curve, ensuring robust separation between risk classes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#FAFAF7] border border-[#D9E2DC] flex items-center justify-center flex-shrink-0">
                       <Filter className="h-5 w-5 text-[#12372A]" />
                    </div>
                    <div>
                       <h4 className="font-bold text-[#12372A] text-sm">Driver Significance</h4>
                       <p className="text-xs leading-relaxed">Gini importance (RF) and normalized coefficients (LogReg) are compared to validate the biological and physical logic of the model.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Validation */}
          <section aria-labelledby="validation-protocol">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#12372A] rounded-lg">
                 <Target className="h-5 w-5 text-[#52B788]" aria-hidden="true" />
              </div>
              <h2 id="validation-protocol" className="text-2xl font-bold text-[#12372A]">03. Validation Protocol</h2>
            </div>
            <div className="bg-white p-8 lg:p-12 rounded-[3rem] border border-[#D9E2DC] shadow-sm">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                     <h3 className="font-bold text-[#12372A] text-sm uppercase tracking-widest mb-4">Historical Hold-out</h3>
                     <p className="text-xs text-[#5B6472] leading-relaxed">
                        Data is split into temporal training and testing sets. Models trained on historical data are tested against recent forest loss labels to evaluate real-world predictive validity.
                     </p>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-[#D9E2DC] pt-8 md:pt-0 md:pl-12">
                     <h3 className="font-bold text-[#12372A] text-sm uppercase tracking-widest mb-4">Spatial Transferability</h3>
                     <p className="text-xs text-[#5B6472] leading-relaxed">
                        To test regional robustness, we conduct "cross-district" validation, where models trained in K’Bang are evaluated on the Mang Yang landscape (and vice versa).
                     </p>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-[#D9E2DC] pt-8 md:pt-0 md:pl-12">
                     <h3 className="font-bold text-[#12372A] text-sm uppercase tracking-widest mb-4">Capture at 10%</h3>
                     <p className="text-xs text-[#5B6472] leading-relaxed">
                        We calculate the "Capture Rate" within the top 10% highest-risk predicted areas to assess the operational efficiency of the resulting warning zones.
                     </p>
                  </div>
               </div>
            </div>
          </section>
        </div>

        <footer className="mt-24 pt-12 border-t border-[#D9E2DC] flex flex-col items-center text-center">
           <h2 className="text-[#12372A] font-bold text-lg mb-6">Explore the High-Resolution Risk Output</h2>
           <Link href="/map" className="bg-[#12372A] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#2D6A4F] transition-all no-underline shadow-lg flex items-center gap-2">
              View Spatial Risk Map <Zap className="h-4 w-4" />
           </Link>
        </footer>
      </div>
    </article>
  )
}
