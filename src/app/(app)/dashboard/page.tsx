import { AlertCircle, Clock, FileText, Layers } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#12372A] mb-8">Welcome to the Research Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border border-[#D9E2DC] shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <Layers className="h-8 w-8 text-[#12372A]" />
            <span className="text-xs font-bold text-[#52B788] bg-[#F5F1E8] px-2 py-1 rounded">Active</span>
          </div>
          <h3 className="font-bold mb-1">Gia Lai Pilot</h3>
          <p className="text-xs text-[#5B6472]">Latest prediction model deployed on April 20, 2026.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#D9E2DC] shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <FileText className="h-8 w-8 text-[#12372A]" />
            <span className="text-xs font-bold text-[#E67700] bg-[#F5F1E8] px-2 py-1 rounded">Under Review</span>
          </div>
          <h3 className="font-bold mb-1">Manuscript v1.0.2</h3>
          <p className="text-xs text-[#5B6472]">Final draft submitted for internal review.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#D9E2DC] shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <AlertCircle className="h-8 w-8 text-[#B42318]" />
            <span className="text-xs font-bold text-[#B42318] bg-[#F5F1E8] px-2 py-1 rounded">Attention</span>
          </div>
          <h3 className="font-bold mb-1">Missing Labels</h3>
          <p className="text-xs text-[#5B6472]">4 validation points in Mang Yang require ground-truth check.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#D9E2DC] shadow-sm overflow-hidden mb-12">
        <div className="p-6 border-b border-[#D9E2DC] bg-[#FAFAF7]">
          <h2 className="font-bold flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#12372A]" /> Recent Updates
          </h2>
        </div>
        <div className="divide-y divide-[#D9E2DC]">
          {[
            { date: 'Apr 24, 2026', user: 'Nguyen Van A', action: 'Uploaded new road distance features for Mang Yang.' },
            { date: 'Apr 22, 2026', user: 'Tran Thi B', action: 'Retrained Random Forest with Sentinel-2 NBR index.' },
            { date: 'Apr 18, 2026', user: 'System', action: 'Automated GFW alerts sync completed (124 new alerts).' }
          ].map((update, i) => (
            <div key={i} className="p-6 flex justify-between items-center hover:bg-[#FAFAF7] transition-colors">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#12372A]">{update.action}</span>
                <span className="text-xs text-[#5B6472]">Modified by {update.user}</span>
              </div>
              <span className="text-xs text-[#5B6472] font-mono">{update.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
