import Link from 'next/link'
import { Globe, Map, Target, ShieldCheck, Microscope } from 'lucide-react'

export const metadata = {
  title: 'Project Scope & Scientific Context',
  description: 'Grounded research into deforestation risk modeling within the Central Highlands of Vietnam, focusing on the Gia Lai pilot study area.',
}

export default function ProjectPage() {
  return (
    <article className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16 border-b border-[#F5F1E8] pb-12">
          <div className="inline-flex items-center gap-2 text-[#52B788] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
            Research Scope
          </div>
          <h1 className="text-4xl font-serif font-bold mb-6 text-[#12372A]">Project Objectives & Scientific Context</h1>
          <p className="text-lg text-[#5B6472] max-w-4xl leading-relaxed italic">
            "Developing high-resolution spatial intelligence to transition forest monitoring from retrospective detection to proactive risk prediction."
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section aria-labelledby="scientific-rationale">
              <h2 id="scientific-rationale" className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#12372A]">
                <Microscope className="h-6 w-6 text-[#52B788]" aria-hidden="true" />
                Scientific Rationale
              </h2>
              <div className="prose prose-forest text-[#5B6472] max-w-none">
                <p className="mb-6 leading-relaxed text-justify">
                  Deforestation monitoring has historically been limited by a reactive paradigm—analyzing forest loss only after disturbance signals are detected by satellite sensors. This research introduces a predictive framework that integrates multi-source geospatial data to model the underlying environmental and anthropogenic pressures that precede actual forest loss.
                </p>
                <p className="leading-relaxed text-justify">
                  By resampling diverse inputs—ranging from multispectral indices to topographic slope—into a unified 1 km analytical grid, the pipeline identifies spatial "hotspots" where the probability of near-term deforestation is statistically significant.
                </p>
              </div>
            </section>

            <section aria-labelledby="empirical-focus">
              <h2 id="empirical-focus" className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#12372A]">
                <Globe className="h-6 w-6 text-[#52B788]" aria-hidden="true" />
                Empirical Pilot: Gia Lai Province
              </h2>
              <p className="text-[#5B6472] leading-relaxed mb-6 text-justify">
                Gia Lai Province provides a robust empirical setting for testing risk-modeling architectures. The region exhibits high heterogeneity in forest types and land-use intensity, offering a comprehensive dataset for cross-district validation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#D9E2DC]">
                    <h3 className="font-bold text-[#12372A] mb-2 uppercase text-[10px] tracking-widest">K’Bang District</h3>
                    <p className="text-xs text-[#5B6472]">A critical site for modeling risks to primary forest cover and existing protected area boundaries.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#D9E2DC]">
                    <h3 className="font-bold text-[#12372A] mb-2 uppercase text-[10px] tracking-widest">Mang Yang District</h3>
                    <p className="text-xs text-[#5B6472]">Enables the assessment of model sensitivity to infrastructure-driven disturbances and rapid land conversion.</p>
                 </div>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-[#12372A] p-8 rounded-3xl text-white shadow-xl">
               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <ShieldCheck className="h-5 w-5 text-[#52B788]" aria-hidden="true" />
                 Analytical Scope
               </h2>
               <ul className="space-y-4">
                {[
                  '1 km² resolution spatial resolution',
                  'Multi-temporal spectral indices',
                  'Anthropogenic pressure features',
                  'Topographic terrain difficulty',
                  'Historical loss label engineering'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0">
                    <span className="text-[#52B788] text-xs font-bold mt-1">0{i+1}</span>
                    <span className="text-sm font-medium text-[#D9E2DC]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 rounded-3xl bg-[#FAFAF7] border border-[#D9E2DC]">
               <h2 className="text-sm font-bold text-[#12372A] uppercase tracking-[0.2em] mb-4">Implementation Note</h2>
               <p className="text-xs text-[#5B6472] leading-relaxed italic">
                 This project focuses exclusively on the scientific validation of the 1 km risk-prediction pipeline within the Gia Lai pilot region. Model outputs are intended for research prioritization and should be interpreted as probabilistic risk estimates.
               </p>
            </div>
          </aside>
        </div>

        <section className="bg-[#12372A] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000')] bg-cover" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6">Advancing Open Geospatial Intelligence</h2>
            <p className="text-[#D9E2DC] mb-10 leading-relaxed text-base">
              The full research methodology, including feature importance rankings and model hyperparameter settings, is documented transparently in our technical publication.
            </p>
            <div className="flex justify-center gap-5">
              <Link href="/methodology" className="bg-[#52B788] text-[#12372A] px-10 py-4 rounded-xl font-bold hover:bg-white transition-all no-underline shadow-lg">
                Examine Methodology
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

