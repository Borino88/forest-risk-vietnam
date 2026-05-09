import Link from 'next/link'
import { Trees, Github } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-[#D9E2DC] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Trees className="h-8 w-8 text-[#12372A]" />
            <Link href="/" className="text-xl font-bold text-[#12372A] tracking-tight">
              Forest Risk Vietnam
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/project" className="text-sm text-[#5B6472] hover:text-[#12372A] font-medium transition-colors">Project</Link>
            <Link href="/methodology" className="text-sm text-[#5B6472] hover:text-[#12372A] font-medium transition-colors">Methodology</Link>
            <Link href="/map" className="text-sm text-[#5B6472] hover:text-[#12372A] font-medium transition-colors">Map</Link>
            <Link href="/results" className="text-sm text-[#5B6472] hover:text-[#12372A] font-medium transition-colors">Results</Link>
            <Link href="/datasets" className="text-sm text-[#5B6472] hover:text-[#12372A] font-medium transition-colors">Datasets</Link>
            <Link href="/publication" className="text-sm text-[#5B6472] hover:text-[#12372A] font-medium transition-colors">Publication</Link>
            <div className="flex items-center gap-4 border-l border-[#D9E2DC] pl-6">
              <a href="https://github.com/Borino88/deforestation-risk-gialai" target="_blank" rel="noopener noreferrer" className="text-[#5B6472] hover:text-[#12372A] transition-colors" aria-label="GitHub Repository">
                <Github className="h-5 w-5" />
              </a>
              <Link href="/map" className="bg-[#12372A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#2D6A4F] transition-colors shadow-sm">Explore Map</Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <a href="https://github.com/Borino88/deforestation-risk-gialai" target="_blank" rel="noopener noreferrer" className="text-[#5B6472] hover:text-[#12372A] transition-colors" aria-label="GitHub Repository">
              <Github className="h-5 w-5" />
            </a>
            <Link href="/map" className="bg-[#12372A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#2D6A4F] transition-colors">Map</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

