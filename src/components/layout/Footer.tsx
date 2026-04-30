import Link from 'next/link'
import { Trees, Mail, Globe } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-[#12372A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-[#2D6A4F] pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Trees className="h-6 w-6 text-[#52B788]" />
              <span className="text-xl font-bold tracking-tight">Forest Risk Vietnam</span>
            </div>
            <p className="text-[#D9E2DC] text-sm leading-relaxed mb-6">
              An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#52B788]">
              <span className="bg-[#52B788]/10 border border-[#52B788]/20 px-2 py-1 rounded">Gia Lai Pilot Implementation</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-[#52B788] text-xs uppercase tracking-widest">Research</h3>
            <ul className="space-y-3 text-sm text-[#D9E2DC]">
              <li><Link href="/project" className="hover:text-white transition-colors">Project Scope</Link></li>
              <li><Link href="/methodology" className="hover:text-white transition-colors">Pipeline Methodology</Link></li>
              <li><Link href="/results" className="hover:text-white transition-colors">Latest Results</Link></li>
              <li><Link href="/publication" className="hover:text-white transition-colors">Publication Details</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-[#52B788] text-xs uppercase tracking-widest">Spatial Data</h3>
            <ul className="space-y-3 text-sm text-[#D9E2DC]">
              <li><Link href="/map" className="hover:text-white transition-colors">Interactive Risk Map</Link></li>
              <li><Link href="/datasets" className="hover:text-white transition-colors">Public Datasets</Link></li>
              <li><Link href="/data-policy" className="hover:text-white transition-colors">Data Usage Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-[#52B788] text-xs uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4 text-sm text-[#D9E2DC]">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-[#52B788]" />
                <a href="mailto:info@deforestation.xyz" className="hover:text-white transition-colors">info@deforestation.xyz</a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-4 w-4 mt-0.5 text-[#52B788]" />
                <span>Gia Lai Province,<br />Vietnam</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#D9E2DC]">
          <p>© {new Date().getFullYear()} Forest Risk Vietnam Platform. Academic Research Implementation.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/admin" className="hover:text-white transition-colors">Researcher Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
