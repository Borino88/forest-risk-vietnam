import Link from 'next/link'
import { Trees } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-[#12372A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-[#2D6A4F] pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Trees className="h-6 w-6 text-[#52B788]" />
              <span className="text-xl font-bold tracking-tight">Forest Risk Vietnam</span>
            </div>
            <p className="text-[#D9E2DC] text-sm leading-relaxed">
              An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-[#52B788]">Project</h3>
            <ul className="space-y-2 text-sm text-[#D9E2DC]">
              <li><Link href="/project" className="hover:text-white">About the Pilot</Link></li>
              <li><Link href="/methodology" className="hover:text-white">Methodology</Link></li>
              <li><Link href="/results" className="hover:text-white">Research Results</Link></li>
              <li><Link href="/publication" className="hover:text-white">Publications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-[#52B788]">Resources</h3>
            <ul className="space-y-2 text-sm text-[#D9E2DC]">
              <li><Link href="/datasets" className="hover:text-white">Datasets</Link></li>
              <li><Link href="/map" className="hover:text-white">Interactive Map</Link></li>
              <li><Link href="/admin" className="hover:text-white">Admin Panel</Link></li>
              <li><Link href="/dashboard" className="hover:text-white">User Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-[#52B788]">Contact</h3>
            <ul className="space-y-2 text-sm text-[#D9E2DC]">
              <li><Link href="/contact" className="hover:text-white">Get in Touch</Link></li>
              <li><a href="mailto:contact@forestrisk.vn" className="hover:text-white">contact@forestrisk.vn</a></li>
              <li>Gia Lai Province Pilot Study</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#D9E2DC]">
          <p>© {new Date().getFullYear()} Forest Risk Vietnam Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
