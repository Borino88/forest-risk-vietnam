import Link from 'next/link'
import { LayoutDashboard, Map, Download, MessageSquare, User } from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#F5F1E8]/50">
      {/* Dashboard Sidebar */}
      <aside className="w-64 bg-[#12372A] text-white hidden lg:flex flex-col">
        <div className="p-6 border-b border-[#2D6A4F]">
          <h2 className="text-lg font-bold">User Dashboard</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#2D6A4F] transition-colors">
            <LayoutDashboard className="h-5 w-5" /> Dashboard Home
          </Link>
          <Link href="/map" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#2D6A4F] transition-colors">
            <Map className="h-5 w-5" /> Researcher Map
          </Link>
          <Link href="/dashboard/downloads" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#2D6A4F] transition-colors">
            <Download className="h-5 w-5" /> Downloads
          </Link>
          <Link href="/dashboard/notes" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#2D6A4F] transition-colors">
            <MessageSquare className="h-5 w-5" /> Research Notes
          </Link>
          <div className="pt-8 border-t border-[#2D6A4F]">
            <Link href="/dashboard/profile" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#2D6A4F] transition-colors">
              <User className="h-5 w-5" /> Profile
            </Link>
          </div>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
