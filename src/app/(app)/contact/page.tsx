import { Mail, Send, Globe } from 'lucide-react'

export const metadata = {
  title: 'Contact Research Team',
  description: 'Get in touch with the Forest Risk Vietnam research team for data access, methodology inquiries, and institutional collaborations.',
}

export default function ContactPage() {
  return (
    <article className="bg-[#FAFAF7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <section aria-labelledby="contact-info">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#52B788]/10 border border-[#52B788]/20 text-[#12372A] text-xs font-bold uppercase tracking-widest mb-6">
              Get in Touch
            </div>
            <h1 id="contact-info" className="text-5xl font-serif font-bold mb-6 text-[#12372A]">Contact Our Research Team</h1>
            <p className="text-xl text-[#5B6472] mb-12 leading-relaxed">
              For inquiries regarding our methodology, data access for academic purposes, or potential institutional collaborations.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-5 p-6 bg-white rounded-3xl border border-[#D9E2DC] shadow-sm hover:border-[#52B788] transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-[#FAFAF7] border border-[#D9E2DC] flex items-center justify-center text-[#12372A] flex-shrink-0 group-hover:bg-[#12372A] group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-bold text-[#12372A] uppercase text-xs tracking-widest mb-1">General Inquiries</h2>
                  <a href="mailto:info@deforestation.xyz" className="text-lg font-bold text-[#12372A] hover:text-[#52B788] transition-colors">info@deforestation.xyz</a>
                </div>
              </div>
              
              <div className="flex gap-5 p-6 bg-white rounded-3xl border border-[#D9E2DC] shadow-sm hover:border-[#52B788] transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-[#FAFAF7] border border-[#D9E2DC] flex items-center justify-center text-[#12372A] flex-shrink-0 group-hover:bg-[#12372A] group-hover:text-white transition-colors">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-bold text-[#12372A] uppercase text-xs tracking-widest mb-1">Study Area</h2>
                  <p className="text-lg font-bold text-[#12372A]">Gia Lai Province, Vietnam</p>
                  <p className="text-sm text-[#5B6472]">Pilot Implementation Districts: K’Bang & Mang Yang</p>
                </div>
              </div>

              <div className="p-8 bg-[#12372A] rounded-[2rem] text-white relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#52B788] opacity-10 rounded-full -mr-16 -mt-16" aria-hidden="true"></div>
                <h2 className="font-bold uppercase text-xs tracking-widest text-[#52B788] mb-4 relative z-10">Note on Data Usage</h2>
                <p className="text-sm text-[#D9E2DC] leading-relaxed relative z-10">
                  Our prediction outputs and spatial data are provided for academic and conservation prioritization purposes. Please cite the primary manuscript when using these materials in your work.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 lg:p-12 rounded-[3rem] border border-[#D9E2DC] shadow-xl relative" aria-labelledby="contact-form">
            <div className="absolute top-0 right-0 p-4 opacity-5" aria-hidden="true">
              <Send className="h-24 w-24 text-[#12372A]" />
            </div>
            <h2 id="contact-form" className="text-2xl font-bold mb-8 text-[#12372A] relative z-10">Send a Message</h2>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all" placeholder="Enter your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all" placeholder="email@example.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="organization" className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Organization</label>
                <input type="text" id="organization" name="organization" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all" placeholder="University, NGO, or Government Dept" />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Inquiry Type</label>
                <select id="inquiry" name="inquiry" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all appearance-none cursor-pointer">
                  <option>Research Collaboration</option>
                  <option>Data Access Request</option>
                  <option>Methodology Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all" placeholder="Please describe your inquiry..." required></textarea>
              </div>
              <button type="button" className="w-full bg-[#12372A] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#2D6A4F] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#12372A]/20">
                Send Message <Send className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
          </section>
        </div>
      </div>
    </article>
  )
}
