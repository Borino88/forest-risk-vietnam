import Link from 'next/link'
import { Globe, Map, Target, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Project Scope',
  description: 'Understanding the scope and objectives of the deforestation risk prediction pilot study in Gia Lai Province, Vietnam.',
}

export default function ProjectPage() {
  return (
    <article className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6 text-[#12372A]">About the Research Project</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Understanding deforestation dynamics in Vietnam requires transparent, high-resolution risk assessment tools that bridge the gap between raw satellite data and actionable policy insights.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <section aria-labelledby="the-problem">
            <h2 id="the-problem" className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#12372A]">
              <Target className="h-8 w-8 text-[#52B788]" aria-hidden="true" />
              The Problem Context
            </h2>
            <div className="prose prose-forest text-[#5B6472]">
              <p className="mb-4 leading-relaxed">
                Rapid land-use changes in Vietnam's central highlands pose significant threats to biodiversity and carbon sequestration. Traditional remote sensing monitoring often focuses on detecting forest loss only after it has already happened.
              </p>
              <p className="leading-relaxed">
                Our research shifts the paradigm toward proactive risk prediction, identifying geographical areas under pressure before significant forest degradation occurs. This predictive approach enables better allocation of limited conservation resources and more effective policy interventions.
              </p>
            </div>
          </section>
          
          <section aria-labelledby="why-gia-lai">
            <h2 id="why-gia-lai" className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#12372A]">
              <Globe className="h-8 w-8 text-[#52B788]" aria-hidden="true" />
              Pilot Study: Gia Lai Province
            </h2>
            <div className="prose prose-forest text-[#5B6472]">
              <p className="mb-4 leading-relaxed">
                Gia Lai Province represents a critical intersection of primary forest reserves, plantation expansion, and infrastructure development. The K’Bang and Mang Yang districts were specifically selected as pilot areas due to their diverse forest typologies and historically documented loss patterns.
              </p>
              <p className="leading-relaxed">
                Serving as an empirical pilot site, Gia Lai provides the necessary environmental variability and historical ground-truth data to rigorously test, validate, and refine our interpretable machine learning pipeline.
              </p>
            </div>
          </section>
        </div>

        {/* Scope Section */}
        <section className="bg-[#FAFAF7] rounded-3xl p-8 lg:p-12 mb-20 border border-[#D9E2DC]" aria-labelledby="project-scope">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="project-scope" className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#12372A]">
                <Map className="h-8 w-8 text-[#52B788]" aria-hidden="true" />
                Current Pilot Scope
              </h2>
              <ul className="space-y-4">
                {[
                  'K’Bang District (Gia Lai Province)',
                  'Mang Yang District (Gia Lai Province)',
                  '1 km resolution spatial grid analysis',
                  'Integration of 5 core public datasets',
                  'Interpretable ML model evaluations (LogReg vs RF)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#12372A] text-[#52B788] flex items-center justify-center flex-shrink-0 text-xs font-bold" aria-hidden="true">✓</div>
                    <span className="text-[#1F2933] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t lg:border-t-0 lg:border-l border-[#D9E2DC] pt-8 lg:pt-0 lg:pl-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#12372A]">
                <TrendingUp className="h-8 w-8 text-[#52B788]" aria-hidden="true" />
                Future National Scaling
              </h2>
              <p className="text-[#5B6472] mb-6 leading-relaxed">
                The methodology is engineered to be scalable. Future expansion phases aim to cover broader geographical regions across Vietnam:
              </p>
              <ul className="space-y-4">
                {[
                  'Full Gia Lai Province coverage',
                  'Expansion to neighboring Central Highland provinces',
                  'Incorporation of CHIRPS rainfall and population density data',
                  'Near-real-time (30-day) alert window integration',
                  'National-scale high-performance computing deployment'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#E8F0ED] text-[#12372A] flex items-center justify-center flex-shrink-0 text-xs font-bold" aria-hidden="true">→</div>
                    <span className="text-[#5B6472] italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center bg-[#12372A] text-white p-12 lg:p-16 rounded-[3rem] shadow-xl relative overflow-hidden" aria-label="Call to Action">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000')] bg-cover bg-center opacity-10" aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-6 italic">“From Pilot to National Insight”</h2>
            <p className="text-[#D9E2DC] max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
              This platform currently presents a pilot implementation for K’Bang and Mang Yang districts in Gia Lai Province. While the architecture is designed for scalability, current model outputs should be interpreted strictly within the context of this pilot study area.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/methodology" className="bg-[#52B788] text-[#12372A] px-10 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-lg">
                Review Our Methodology
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

