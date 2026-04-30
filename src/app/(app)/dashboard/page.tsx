import { AlertCircle, Clock, FileText, Layers, CheckCircle2, Info, ArrowRight } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#12372A]">Researcher Dashboard</h1>
          <p className="text-[#5B6472]">Project monitoring and pipeline status for Gia Lai Pilot Implementation.</p>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-[#5B6472] uppercase tracking-widest mb-1">Last System Sync</div>
          <div className="text-sm font-mono bg-[#F5F1E8] px-3 py-1 rounded border border-[#D9E2DC]">2026-04-30 14:20 ICT</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm relative overflow-hidden group hover:border-[#52B788] transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Layers className="h-24 w-24" />
          </div>
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A]">
              <Layers className="h-6 w-6" />
            </div>
            <span className="text-[10px] font-bold text-[#2F9E44] bg-[#F1F9F5] border border-[#2F9E44]/20 px-2 py-1 rounded uppercase tracking-wider">Active Pilot</span>
          </div>
          <h3 className="font-bold text-lg mb-2 text-[#12372A]">Gia Lai District Grid</h3>
          <p className="text-sm text-[#5B6472] leading-relaxed">Spatial risk grid (1 km resolution) deployed for K’Bang and Mang Yang.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm relative overflow-hidden group hover:border-[#52B788] transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <FileText className="h-24 w-24" />
          </div>
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A]">
              <FileText className="h-6 w-6" />
            </div>
            <span className="text-[10px] font-bold text-[#12372A] bg-[#F5F1E8] border border-[#D9E2DC] px-2 py-1 rounded uppercase tracking-wider">Accepted</span>
          </div>
          <h3 className="font-bold text-lg mb-2 text-[#12372A]">Manuscript Status</h3>
          <p className="text-sm text-[#5B6472] leading-relaxed">MDPI Remote Sensing publication accepted. Final proofing complete.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm relative overflow-hidden group hover:border-[#52B788] transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <CheckCircle2 className="h-24 w-24" />
          </div>
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A]">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <span className="text-[10px] font-bold text-[#52B788] bg-[#F1F9F5] border border-[#52B788]/20 px-2 py-1 rounded uppercase tracking-wider">Validated</span>
          </div>
          <h3 className="font-bold text-lg mb-2 text-[#12372A]">Model Metrics</h3>
          <p className="text-sm text-[#5B6472] leading-relaxed">Random Forest AUC stabilized at 0.892 following cross-district validation.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-[#D9E2DC] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#D9E2DC] bg-[#FAFAF7] flex justify-between items-center">
            <h2 className="font-bold flex items-center gap-2 text-[#12372A]">
              <Clock className="h-5 w-5" /> Pipeline Milestones
            </h2>
            <button className="text-xs font-bold text-[#12372A] hover:underline uppercase tracking-widest">View Full Log</button>
          </div>
          <div className="divide-y divide-[#D9E2DC]">
            {[
              { date: 'Apr 28, 2026', type: 'Data', action: 'Hansen GFC 2023 loss labels integrated into master dataset.' },
              { date: 'Apr 20, 2026', type: 'Model', action: 'Random Forest hyperparameters optimized for spatial transferability.' },
              { date: 'Apr 12, 2026', type: 'Publication', action: 'Final revision of Remote Sensing manuscript submitted.' },
              { date: 'Apr 05, 2026', type: 'Data', action: 'Sentinel-2 multispectral composite for Gia Lai pilot updated.' }
            ].map((update, i) => (
              <div key={i} className="p-6 flex justify-between items-start hover:bg-[#FAFAF7] transition-colors">
                <div className="flex gap-4">
                  <div className={`h-2 w-2 rounded-full mt-1.5 ${
                    update.type === 'Data' ? 'bg-[#52B788]' : 
                    update.type === 'Model' ? 'bg-[#12372A]' : 'bg-[#E67700]'
                  }`}></div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#12372A]">{update.action}</span>
                    <span className="text-[10px] font-bold text-[#5B6472] uppercase tracking-widest mt-1">{update.type} Update</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#5B6472] bg-[#F5F1E8] px-2 py-0.5 rounded border border-[#D9E2DC]">{update.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-[#12372A] p-8 rounded-3xl text-white">
            <h3 className="font-bold mb-6 flex items-center gap-2 text-[#52B788]">
              <Info className="h-5 w-5" /> System Notice
            </h3>
            <p className="text-sm text-[#D9E2DC] leading-relaxed mb-6">
              The current dashboard displays automated sync logs from the Gia Lai pilot pipeline. Operational scaling to additional provinces is scheduled for Phase 2.
            </p>
            <div className="pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#52B788] animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest">Pipeline Operational</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm">
            <h3 className="font-bold text-[#12372A] mb-4 uppercase text-xs tracking-widest">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
              <button className="w-full text-left p-4 rounded-xl bg-[#F5F1E8] hover:bg-[#D9E2DC] transition-colors text-xs font-bold text-[#12372A] flex items-center justify-between">
                Export Validation Results <ArrowRight className="h-4 w-4" />
              </button>
              <button className="w-full text-left p-4 rounded-xl bg-[#F5F1E8] hover:bg-[#D9E2DC] transition-colors text-xs font-bold text-[#12372A] flex items-center justify-between">
                Trigger GEE Sync <Clock className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
