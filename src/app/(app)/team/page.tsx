import Link from 'next/link'
import { Globe, Mail, School, Linkedin } from 'lucide-react'

export default function TeamPage() {
  const team = [
    {
      name: 'Pham Duy Long',
      role: 'First Author',
      bio: 'Leading researcher focused on pipeline development, feature engineering, and model validation in Google Earth Engine.',
      school: 'The Olympia School',
      affiliation: 'Corresponding Author'
    },
    {
      name: 'Nguyen Duc Anh',
      role: 'Co-Author',
      bio: 'Specializing in geospatial data acquisition and multispectral feature extraction from Sentinel-2 and Hansen datasets.',
      school: 'Foreign Language Specialized School',
      affiliation: 'Data Processing'
    },
    {
      name: 'Do Nhat Quang',
      role: 'Co-Author',
      bio: 'Focused on topographic risk drivers and spatial generalization testing across the Gia Lai pilot districts.',
      school: 'Vinschool The Harmony',
      affiliation: 'Spatial Analysis'
    },
    {
      name: 'Dam Anh Thu',
      role: 'Co-Author',
      bio: 'Contributing to statistical evaluation of model performance and interpretability analysis for risk driver coefficients.',
      school: 'Capital Univ. of Physical Ed. and Sports',
      affiliation: 'Statistical Validation'
    },
    {
      name: 'Tran Dang An',
      role: 'Supervisor',
      bio: 'Guiding the methodology validation and research framework. Expert in environmental AI and geospatial modeling.',
      school: 'SMART LAB, FPT University',
      affiliation: 'Methodology Supervisor'
    }
  ]

  return (
    <div className="bg-[#FAFAF7] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12372A]/5 border border-[#12372A]/10 text-[#12372A] text-xs font-bold uppercase tracking-widest mb-6">
            The Research Team
          </div>
          <h1 className="text-5xl font-serif font-bold mb-6 text-[#12372A]">Meet the Researchers</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            A collaborative effort between students and experts to implement state-of-the-art machine learning for forest conservation in Vietnam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-[#D9E2DC] shadow-sm flex flex-col hover:border-[#52B788] transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="h-20 w-20 rounded-2xl bg-[#12372A] text-[#52B788] flex items-center justify-center text-2xl font-bold border-4 border-[#F5F1E8] shadow-sm group-hover:scale-105 transition-transform">
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#F5F1E8] flex items-center justify-center text-[#12372A] hover:bg-[#12372A] hover:text-white transition-colors cursor-pointer">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#F5F1E8] flex items-center justify-center text-[#12372A] hover:bg-[#12372A] hover:text-white transition-colors cursor-pointer">
                    <Linkedin className="h-4 w-4" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#12372A] mb-1">{m.name}</h3>
              <div className="text-xs font-bold text-[#52B788] uppercase tracking-widest mb-4">{m.role}</div>
              
              <p className="text-sm text-[#5B6472] mb-8 leading-relaxed flex-1 italic">
                "{m.bio}"
              </p>
              
              <div className="pt-6 border-t border-[#F5F1E8] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#12372A]">
                  <School className="h-3.5 w-3.5" /> {m.school}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#5B6472] uppercase tracking-wide">
                   {m.affiliation}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-[#12372A] rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000')] bg-cover bg-center opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4 italic">Interested in Collaboration?</h2>
            <p className="text-[#D9E2DC] max-w-2xl mx-auto mb-10 leading-relaxed">
              We are actively looking for academic partners to help scale this pilot implementation to other forest-critical provinces in Vietnam.
            </p>
            <Link href="/contact" className="bg-[#52B788] text-[#12372A] px-10 py-4 rounded-xl font-bold hover:bg-white transition-all inline-block no-underline">
              Contact the Lead Researcher
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
