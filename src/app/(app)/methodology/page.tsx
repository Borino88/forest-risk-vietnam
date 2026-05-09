import { Cpu, Database, Filter, Layers, Zap } from 'lucide-react'

export const metadata = {
  title: 'Research Methodology',
  description: 'Detailed explanation of the interpretable machine learning pipeline used for deforestation risk prediction in Vietnam.',
}

export default function MethodologyPage() {
  return (
    <article className="bg-[#FAFAF7] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6 text-[#12372A]">Research Methodology</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Our pipeline integrates multi-temporal satellite imagery and proximity-based features into an interpretable machine learning framework to forecast deforestation probability at a 1 km resolution.
          </p>
        </header>

        {/* Step-by-Step Methodology */}
        <div className="space-y-24">
          {/* Step 1 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" aria-labelledby="step1">
            <div>
              <div className="inline-flex items-center gap-2 text-[#52B788] font-bold uppercase tracking-widest text-sm mb-4">
                <Database className="h-5 w-5" aria-hidden="true" />
                Step 01
              </div>
              <h2 id="step1" className="text-3xl font-bold mb-6 text-[#12372A]">Data Harmonization & Engineering</h2>
              <p className="text-[#5B6472] mb-6 leading-relaxed">
                We leverage Google Earth Engine (GEE) to extract, process, and harmonize diverse satellite and raster datasets. All geospatial data is clipped to district boundaries and resampled to a unified 1 km spatial grid for consistency.
              </p>
              <div className="bg-white p-6 rounded-xl border border-[#D9E2DC] shadow-sm">
                <h3 className="font-bold mb-4 text-[#12372A]">Core Datasets</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Hansen Global Forest Change', role: 'Baseline forest cover and labels' },
                    { name: 'GFW Integrated Alerts', role: 'Near-real-time disturbance signals' },
                    { name: 'Sentinel-2 (B2-B12)', role: 'Spectral vegetation condition (NDVI, NBR)' },
                    { name: 'SRTM Terrain Data', role: 'Topographic slope and elevation' },
                    { name: 'OpenStreetMap', role: 'Distance to roads and infrastructure' }
                  ].map((d, i) => (
                    <div key={i} className="flex justify-between text-sm border-b border-[#F5F1E8] pb-3 last:border-0 last:pb-0">
                      <span className="font-medium text-[#1F2933]">{d.name}</span>
                      <span className="text-[#5B6472] italic text-right">{d.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#12372A] p-8 rounded-3xl text-white shadow-lg flex flex-col justify-center min-h-[300px]">
              <h3 className="text-[#52B788] font-bold mb-6 text-xl">Pipeline Logic Architecture</h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#52B788]" aria-hidden="true"></div>
                  <p className="text-sm font-medium">Raster clipping and masking in Google Earth Engine</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#52B788]" aria-hidden="true"></div>
                  <p className="text-sm font-medium">Coordinate-based spatial feature joining</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#52B788]" aria-hidden="true"></div>
                  <p className="text-sm font-medium">Standardized analytical master table generation</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#52B788]" aria-hidden="true"></div>
                  <p className="text-sm font-medium">Label engineering derived from Hansen lossyear</p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" aria-labelledby="step2">
            <div className="order-2 lg:order-1 bg-[#F5F1E8] p-8 rounded-3xl border border-[#D9E2DC]">
              <h3 className="text-[#12372A] font-bold mb-6 uppercase text-xs tracking-widest">Model Comparison Strategy</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-5 rounded-xl border border-[#D9E2DC] shadow-sm">
                  <span className="font-bold text-[#12372A] block mb-1">Baseline Score</span>
                  <p className="text-sm text-[#5B6472]">A proximity-weighted heuristic serving as a fundamental benchmark.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#D9E2DC] shadow-sm">
                  <span className="font-bold text-[#12372A] block mb-1">Logistic Regression</span>
                  <p className="text-sm text-[#5B6472]">Provides transparent coefficient analysis to determine the directionality of risk drivers.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#D9E2DC] shadow-sm">
                  <span className="font-bold text-[#12372A] block mb-1">Random Forest</span>
                  <p className="text-sm text-[#5B6472]">Captures complex non-linear feature interactions to maximize discriminative accuracy.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-[#52B788] font-bold uppercase tracking-widest text-sm mb-4">
                <Cpu className="h-5 w-5" aria-hidden="true" />
                Step 02
              </div>
              <h2 id="step2" className="text-3xl font-bold mb-6 text-[#12372A]">Modeling & Interpretation</h2>
              <p className="text-[#5B6472] mb-6 leading-relaxed">
                We systematically evaluate multiple machine learning paradigms to achieve an optimal balance between predictive accuracy and scientific interpretability. These models calculate the continuous probability of forest loss occurring within a 1 km grid cell.
              </p>
              <ul className="space-y-6 text-[#5B6472]">
                <li className="flex gap-4">
                  <Zap className="h-6 w-6 text-[#52B788] flex-shrink-0" aria-hidden="true" />
                  <span className="leading-relaxed"><strong className="text-[#12372A]">AUC-ROC Analysis:</strong> Utilized to comprehensively measure and compare the general discriminative performance of each model.</span>
                </li>
                <li className="flex gap-4">
                  <Filter className="h-6 w-6 text-[#52B788] flex-shrink-0" aria-hidden="true" />
                  <span className="leading-relaxed"><strong className="text-[#12372A]">Feature Importance:</strong> Statistical extraction of driver significance, highlighting the primary catalysts for deforestation (e.g., distance to roads, elevation).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Step 3 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" aria-labelledby="step3">
            <div>
              <div className="inline-flex items-center gap-2 text-[#52B788] font-bold uppercase tracking-widest text-sm mb-4">
                <Layers className="h-5 w-5" aria-hidden="true" />
                Step 03
              </div>
              <h2 id="step3" className="text-3xl font-bold mb-6 text-[#12372A]">Risk Zone Categorization</h2>
              <p className="text-[#5B6472] mb-8 leading-relaxed">
                Continuous probability outputs are statistically thresholded into discrete, actionable warning zones. This classification is vital for translating complex algorithmic outputs into practical maps that prioritize areas for ground-based patrols and conservation efforts.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-[#D9E2DC]">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="h-3 rounded-full bg-[#2F9E44]"></div>
                  <div className="h-3 rounded-full bg-[#E67700]"></div>
                  <div className="h-3 rounded-full bg-[#B42318]"></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-[#12372A] uppercase tracking-wider">
                  <span>Low Risk</span>
                  <span className="text-center">Medium Risk</span>
                  <span className="text-right">High Risk</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm">
              <h3 className="font-bold text-xl text-[#12372A] mb-4">Validation Protocol</h3>
              <p className="text-[#5B6472] leading-relaxed mb-6">
                Model reliability is established through rigorous validation frameworks. We employ historical hold-out periods and spatial cross-validation architectures—specifically testing models trained on K’Bang data against the Mang Yang landscape to verify spatial generalization.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#F5F1E8] text-[#12372A] text-xs font-bold rounded-lg uppercase tracking-wider">Hold-out Evaluation</span>
                <span className="px-4 py-2 bg-[#F5F1E8] text-[#12372A] text-xs font-bold rounded-lg uppercase tracking-wider">Spatial Generalization</span>
                <span className="px-4 py-2 bg-[#F5F1E8] text-[#12372A] text-xs font-bold rounded-lg uppercase tracking-wider">Top-Tier Capture Rates</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
