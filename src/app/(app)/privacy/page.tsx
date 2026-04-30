import { Mail, ShieldCheck } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-8 text-[#12372A]">Privacy Policy</h1>
        
        <div className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#52B788]" /> Data Collection
            </h2>
            <p className="text-[#5B6472] leading-relaxed">
              We collect minimal personal data necessary for the operation of this research platform. This includes information provided through our contact form (name, email, organization) and basic, non-identifiable usage analytics to improve the platform's performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Information Usage</h2>
            <p className="text-[#5B6472] leading-relaxed">
              The information collected is used strictly for:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-[#5B6472]">
              <li>Responding to research inquiries and collaboration requests.</li>
              <li>Monitoring platform traffic and geographical interest in the pilot project.</li>
              <li>Providing updates on the publication status of the primary manuscript.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Data Protection</h2>
            <p className="text-[#5B6472] leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. All submitted inquiry data is stored securely and is only accessible by the primary research team members.
            </p>
          </section>

          <section className="p-6 bg-[#F5F1E8] rounded-2xl border border-[#D9E2DC]">
            <h2 className="text-sm font-bold mb-3 uppercase tracking-widest text-[#12372A]">Contact</h2>
            <p className="text-sm text-[#5B6472] mb-4">
              If you have any questions regarding your data or this privacy policy, please contact us:
            </p>
            <a href="mailto:info@deforestation.xyz" className="flex items-center gap-2 font-bold text-[#12372A] hover:underline">
              <Mail className="h-4 w-4" /> info@deforestation.xyz
            </a>
          </section>

          <div className="pt-8 border-t border-[#D9E2DC] text-xs text-[#5B6472]">
            Last updated: April 30, 2026
          </div>
        </div>
      </div>
    </div>
  )
}
