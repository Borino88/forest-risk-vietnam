import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-[#5B6472] mb-12 leading-relaxed">
              Have questions about our methodology, datasets, or interested in a research collaboration? We'd love to hear from you.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-white border border-[#D9E2DC] flex items-center justify-center text-[#12372A]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#12372A]">Email</h4>
                  <p className="text-[#5B6472]">contact@forestrisk.vn</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-white border border-[#D9E2DC] flex items-center justify-center text-[#12372A]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#12372A]">Location</h4>
                  <p className="text-[#5B6472]">Gia Lai Province Pilot Study Office</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-white border border-[#D9E2DC] flex items-center justify-center text-[#12372A]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#12372A]">Inquiries</h4>
                  <p className="text-[#5B6472]">Available Mon-Fri, 9am - 5pm ICT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-2xl border border-[#D9E2DC] shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#12372A] mb-2 uppercase tracking-wide">Full Name</label>
                  <input type="text" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#12372A]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#12372A] mb-2 uppercase tracking-wide">Email Address</label>
                  <input type="email" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#12372A]" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#12372A] mb-2 uppercase tracking-wide">Organization</label>
                <input type="text" className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#12372A]" placeholder="University or NGO" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#12372A] mb-2 uppercase tracking-wide">Inquiry Type</label>
                <select className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#12372A]">
                  <option>Collaboration</option>
                  <option>Research Question</option>
                  <option>Dataset Access</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#12372A] mb-2 uppercase tracking-wide">Message</label>
                <textarea rows={5} className="w-full bg-[#FAFAF7] border border-[#D9E2DC] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#12372A]" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full btn-primary py-4 text-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
