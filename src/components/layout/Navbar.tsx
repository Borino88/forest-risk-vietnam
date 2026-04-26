import Link from 'next/link'
import { Trees } from 'lucide-react'

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
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#5B6472] hover:text-[#12372A] font-medium">Home</Link>
            <Link href="/project" className="text-[#5B6472] hover:text-[#12372A] font-medium">Project</Link>
            <Link href="/methodology" className="text-[#5B6472] hover:text-[#12372A] font-medium">Methodology</Link>
            <Link href="/map" className="text-[#5B6472] hover:text-[#12372A] font-medium">Map</Link>
            <Link href="/results" className="text-[#5B6472] hover:text-[#12372A] font-medium">Results</Link>
            <Link href="/datasets" className="text-[#5B6472] hover:text-[#12372A] font-medium">Datasets</Link>
            <Link href="/publication" className="text-[#5B6472] hover:text-[#12372A] font-medium">Publication</Link>
            <Link href="/admin" className="btn-primary">Explore Map</Link>
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <Link href="/map" className="btn-primary py-1.5 px-4 text-sm">Map</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
