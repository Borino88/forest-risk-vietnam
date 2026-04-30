import { ShieldAlert, Info } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-8 text-[#12372A]">Terms of Use</h1>
        
        <div className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-[#52B788]" /> Research Platform Disclaimer
            </h2>
            <p className="text-[#5B6472] leading-relaxed">
              The Forest Risk Vietnam platform is an academic research implementation. The deforestation risk maps, warning zones, and associated data provided on this website are outputs of a pilot machine learning pipeline (2023) for K’Bang and Mang Yang districts in Gia Lai Province.
            </p>
          </section>

          <section className="p-6 bg-[#B42318]/5 rounded-2xl border border-[#B42318]/10">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#B42318]">
              <ShieldAlert className="h-5 w-5" /> Not Legal Proof
            </h2>
            <p className="text-sm text-[#B42318]/80 leading-relaxed font-medium">
              The risk probability layers and warning zones are designed for conservation prioritization and research purposes only. They do not constitute legal proof of illegal logging, land-use violations, or actual forest loss. Verification through ground-truthing and official government spatial data is required for any enforcement or legal action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Accuracy and Liability</h2>
            <p className="text-[#5B6472] leading-relaxed">
              While every effort is made to ensure the scientific integrity of the modeling pipeline, we provide no guarantee of operational accuracy or real-time reliability. The research team and associated institutions are not liable for any decisions made based on the data presented on this platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Acceptable Use</h2>
            <p className="text-[#5B6472] leading-relaxed">
              Users are encouraged to use the maps and data for academic research, conservation planning, and policy discussion. Any redistribution or commercial use of the derived datasets must be explicitly approved by the corresponding author.
            </p>
          </section>

          <div className="pt-8 border-t border-[#D9E2DC] text-xs text-[#5B6472]">
            Last updated: April 30, 2026
          </div>
        </div>
      </div>
    </div>
  )
}
