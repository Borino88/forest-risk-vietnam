import { Globe, Map, Target, TrendingUp } from 'lucide-react'

export default function ProjectPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6">About the Research</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Understanding deforestation dynamics in Vietnam requires transparent, high-resolution risk assessment tools that bridge the gap between raw satellite data and actionable policy insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-[#12372A]" />
              The Problem
            </h2>
            <div className="prose prose-forest text-[#5B6472]">
              <p className="mb-4">
                Rapid land-use changes in Vietnam's central highlands pose significant threats to biodiversity and carbon sequestration. Traditional monitoring often focuses on detecting loss *after* it happens.
              </p>
              <p>
                Our research shifts the focus toward **risk prediction**, identifying areas under pressure before significant forest loss occurs. This proactive approach allows for better allocation of limited conservation resources.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-[#12372A]" />
              Why Gia Lai?
            </h2>
            <div className="prose prose-forest text-[#5B6472]">
              <p className="mb-4">
                Gia Lai Province represents a critical intersection of primary forest, plantation expansion, and infrastructure development. K’Bang and Mang Yang districts were selected as pilot areas due to their diverse forest types and historical loss patterns.
              </p>
              <p>
                As a pilot site, Gia Lai provides the necessary ground-truth data and environmental variability to test and refine our interpretable machine learning pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* Scope Section */}
        <div className="bg-[#F5F1E8] rounded-2xl p-8 lg:p-12 mb-20 border border-[#D9E2DC]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#12372A]">
                <Map className="h-8 w-8" />
                Current Pilot Scope
              </h2>
              <ul className="space-y-4">
                {[
                  'K’Bang District (Gia Lai Province)',
                  'Mang Yang District (Gia Lai Province)',
                  '1 km resolution spatial grid',
                  'Integration of 5 core public datasets',
                  'Interpretable ML Model comparisons'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#12372A] text-[#52B788] flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</div>
                    <span className="text-[#1F2933]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l border-[#D9E2DC] lg:pl-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#12372A]">
                <TrendingUp className="h-8 w-8" />
                Future National Scaling
              </h2>
              <p className="text-[#5B6472] mb-6">
                The methodology is designed to be scalable to the entire country of Vietnam. Future expansion phases will include:
              </p>
              <ul className="space-y-4">
                {[
                  'Full Gia Lai Province coverage',
                  'Expansion to neighboring Central Highland provinces',
                  'Incorporation of CHIRPS rainfall and population density',
                  'Near-real-time (30-day) alert window integration',
                  'National-scale high-performance computing pipeline'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#D9E2DC] text-[#12372A] flex items-center justify-center flex-shrink-0 text-xs font-bold">→</div>
                    <span className="text-[#5B6472] italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-[#12372A] text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-serif font-bold mb-4 italic">“From Pilot to National Insight”</h2>
          <p className="text-[#D9E2DC] max-w-2xl mx-auto mb-8">
            This platform currently presents a pilot implementation for K’Bang and Mang Yang districts in Gia Lai Province. The methodology is designed to be scalable to larger regions, but current model outputs should be interpreted within the pilot study area.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/methodology" className="bg-[#52B788] text-[#12372A] px-8 py-3 rounded-md font-bold hover:bg-white transition-all">
              View Methodology
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
