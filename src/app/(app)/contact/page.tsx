import { Mail, MapPin, Send, Globe } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#52B788]/10 border border-[#52B788]/20 text-[#12372A] text-xs font-bold uppercase tracking-widest mb-6">
              Get in Touch
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6 text-[#12372A]">Contact Our Research Team</h1>
            <p className="text-xl text-[#5B6472] mb-12 leading-relaxed">
              For inquiries regarding our methodology, data access for academic purposes, or potential institutional collaborations.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-5 p-6 bg-white rounded-2xl border border-[#D9E2DC] shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#12372A] uppercase text-xs tracking-widest mb-1">General Inquiries</h4>
                  <a href="mailto:info@deforestation.xyz" className="text-lg font-bold text-[#12372A] hover:text-[#52B788] transition-colors">info@deforestation.xyz</a>
                </div>
              </div>
              
              <div className="flex gap-5 p-6 bg-white rounded-2xl border border-[#D9E2DC] shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] flex-shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#12372A] uppercase text-xs tracking-widest mb-1">Study Area</h4>
                  <p className="text-lg font-bold text-[#12372A]">Gia Lai Province, Vietnam</p>
                  <p className="text-sm text-[#5B6472]">Pilot Implementation Districts: K’Bang & Mang Yang</p>
                </div>
              </div>

              <div className="p-8 bg-[#12372A] rounded-2xl text-white">
                <h4 className="font-bold uppercase text-xs tracking-widest text-[#52B788] mb-4">Note on Data Usage</h4>
                <p className="text-sm text-[#D9E2DC] leading-relaxed">
                  Our prediction outputs and spatial data are provided for academic and conservation prioritization purposes. Please cite the primary manuscript when using these materials in your work.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-[#D9E2DC] shadow-xl relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Send className="h-24 w-24 text-[#12372A]" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-[#12372A]">Send a Message</h3>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Organization</label>
                <input type="text" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all" placeholder="University, NGO, or Government Dept" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Inquiry Type</label>
                <select className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all appearance-none cursor-pointer">
                  <option>Research Collaboration</option>
                  <option>Data Access Request</option>
                  <option>Methodology Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#5B6472] mb-2 uppercase tracking-widest">Message</label>
                <textarea rows={5} className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#52B788] transition-all" placeholder="Please describe your inquiry..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#12372A] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#2D6A4F] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#12372A]/20">
                Send Message <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
