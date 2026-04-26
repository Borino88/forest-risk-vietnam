import { Cpu, Database, Filter, Layers, Zap } from 'lucide-react'

export default function MethodologyPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6">Research Methodology</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Our pipeline integrates multi-temporal satellite imagery and proximity-based features into an interpretable machine learning framework to predict deforestation probability.
          </p>
        </div>

        {/* Step-by-Step Methodology */}
        <div className="space-y-24">
          {/* Step 1 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-[#52B788] font-bold uppercase tracking-widest text-sm mb-4">
                <Database className="h-5 w-5" />
                Step 01
              </div>
              <h2 className="text-3xl font-bold mb-6">Data Harmonization</h2>
              <p className="text-[#5B6472] mb-6 leading-relaxed">
                We utilize Google Earth Engine (GEE) to extract and process satellite and raster datasets. All data is clipped to district boundaries and resampled to a unified 1 km spatial grid.
              </p>
              <div className="bg-white p-6 rounded-xl border border-[#D9E2DC] shadow-sm">
                <h3 className="font-bold mb-4 text-[#12372A]">Core Datasets</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Hansen Global Forest Change', role: 'Baseline forest cover and labels' },
                    { name: 'GFW Integrated Alerts', role: 'Near-real-time disturbance signals' },
                    { name: 'Sentinel-2 (B2-B12)', role: 'Spectral vegetation condition' },
                    { name: 'SRTM Terrain Data', role: 'Slope and terrain difficulty' },
                    { name: 'OpenStreetMap', role: 'Distance to roads and infrastructure' }
                  ].map((d, i) => (
                    <div key={i} className="flex justify-between text-sm border-b border-[#F5F1E8] pb-2 last:border-0">
                      <span className="font-medium text-[#1F2933]">{d.name}</span>
                      <span className="text-[#5B6472] italic">{d.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#12372A] p-8 rounded-2xl text-white aspect-video flex flex-col justify-center">
              <h4 className="text-[#52B788] font-bold mb-4">Pipeline Logic</h4>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#52B788]"></div>
                  <p className="text-sm">Raster clipping and masking in GEE</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#52B788]"></div>
                  <p className="text-sm">Coordinate-based feature joining</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#52B788]"></div>
                  <p className="text-sm">Standardized master table generation</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#52B788]"></div>
                  <p className="text-sm">Label engineering from Hansen lossyear</p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 bg-[#F5F1E8] p-8 rounded-2xl border border-[#D9E2DC]">
              <h4 className="text-[#12372A] font-bold mb-6 uppercase text-xs tracking-widest">Model Comparison Strategy</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg border border-[#D9E2DC]">
                  <span className="font-bold text-[#12372A]">Baseline Score</span>
                  <p className="text-xs text-[#5B6472]">Weighted combination of known risk drivers for benchmarking.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-[#D9E2DC]">
                  <span className="font-bold text-[#12372A]">Logistic Regression</span>
                  <p className="text-xs text-[#5B6472]">Interpretability of coefficients to understand factor direction.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-[#D9E2DC]">
                  <span className="font-bold text-[#12372A]">Random Forest</span>
                  <p className="text-xs text-[#5B6472]">Capturing complex non-linear interactions for higher accuracy.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-[#52B788] font-bold uppercase tracking-widest text-sm mb-4">
                <Cpu className="h-5 w-5" />
                Step 02
              </div>
              <h2 className="text-3xl font-bold mb-6">Modeling & Interpretation</h2>
              <p className="text-[#5B6472] mb-6 leading-relaxed">
                We compare multiple machine learning approaches to balance prediction accuracy with scientific interpretability. The models predict the probability of a 1 km grid cell experiencing forest loss.
              </p>
              <ul className="space-y-4 text-[#5B6472]">
                <li className="flex gap-3">
                  <Zap className="h-5 w-5 text-[#12372A] flex-shrink-0" />
                  <span><strong>AUC-ROC</strong> used to measure general discriminative performance.</span>
                </li>
                <li className="flex gap-3">
                  <Filter className="h-5 w-5 text-[#12372A] flex-shrink-0" />
                  <span><strong>Feature Importance</strong> analysis reveals the most significant risk drivers (e.g., distance to roads, vegetation health).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Step 3 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-[#52B788] font-bold uppercase tracking-widest text-sm mb-4">
                <Layers className="h-5 w-5" />
                Step 03
              </div>
              <h2 className="text-3xl font-bold mb-6">Risk Zone Categorization</h2>
              <p className="text-[#5B6472] mb-6 leading-relaxed">
                Continuous probability scores are thresholded into actionable warning zones. These zones prioritize areas for ground-based monitoring or remote sensing follow-up.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-2 rounded-full bg-[#2F9E44]"></div>
                <div className="h-2 rounded-full bg-[#E67700]"></div>
                <div className="h-2 rounded-full bg-[#B42318]"></div>
              </div>
              <div className="flex justify-between text-xs font-bold text-[#5B6472] mt-2 uppercase tracking-tighter">
                <span>Low Risk</span>
                <span>Medium Risk</span>
                <span>High Risk</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#D9E2DC] shadow-sm">
              <h4 className="font-bold text-[#12372A] mb-4">Validation Approach</h4>
              <p className="text-sm text-[#5B6472] mb-4">
                Models are validated using a historical hold-out period and spatial cross-validation. We test the model trained in K’Bang on Mang Yang district to ensure spatial generalization capability.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#F5F1E8] text-[#12372A] text-xs font-bold rounded-full">K-Fold CV</span>
                <span className="px-3 py-1 bg-[#F5F1E8] text-[#12372A] text-xs font-bold rounded-full">Spatial Generalization</span>
                <span className="px-3 py-1 bg-[#F5F1E8] text-[#12372A] text-xs font-bold rounded-full">Capture Rate</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
