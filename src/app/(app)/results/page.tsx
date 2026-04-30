import Link from 'next/link'
import { BarChart3, ChevronRight, FileText, PieChart, Info, Download, ArrowRight } from 'lucide-react'

export default function ResultsPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-6">Research Results</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Detailed evaluation of our deforestation risk pipeline using Hansen Global Forest Change data (2001-2023) for Gia Lai pilot districts.
          </p>
        </div>

        {/* Model Performance Table */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Model Performance (Internal Split)</h2>
            <span className="text-xs bg-[#F5F1E8] px-3 py-1 rounded-full font-bold text-[#12372A] border border-[#D9E2DC]">TABLE 3</span>
          </div>
          <div className="overflow-x-auto bg-white rounded-xl border border-[#D9E2DC] shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#F5F1E8] text-[#12372A]">
                <tr>
                  <th className="px-6 py-4 font-bold">Model</th>
                  <th className="px-6 py-4 font-bold">AUC-ROC</th>
                  <th className="px-6 py-4 font-bold">Precision</th>
                  <th className="px-6 py-4 font-bold">Recall</th>
                  <th className="px-6 py-4 font-bold">F1 Score</th>
                  <th className="px-6 py-4 font-bold">Capture @ 10%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F1E8]">
                <tr>
                  <td className="px-6 py-4 font-medium">Baseline (Road Dist)</td>
                  <td className="px-6 py-4">0.563</td>
                  <td className="px-6 py-4">0.579</td>
                  <td className="px-6 py-4">0.974</td>
                  <td className="px-6 py-4">0.726</td>
                  <td className="px-6 py-4">12.2%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Logistic Regression</td>
                  <td className="px-6 py-4">0.788</td>
                  <td className="px-6 py-4">0.663</td>
                  <td className="px-6 py-4">0.851</td>
                  <td className="px-6 py-4">0.745</td>
                  <td className="px-6 py-4">17.6%</td>
                </tr>
                <tr className="bg-[#52B788]/5">
                  <td className="px-6 py-4 font-bold text-[#12372A]">Random Forest (Best)</td>
                  <td className="px-6 py-4 font-bold text-[#12372A]">0.892</td>
                  <td className="px-6 py-4 font-bold text-[#12372A]">0.806</td>
                  <td className="px-6 py-4 font-bold text-[#12372A]">0.856</td>
                  <td className="px-6 py-4 font-bold text-[#12372A]">0.830</td>
                  <td className="px-6 py-4 font-bold text-[#12372A]">17.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-start gap-2 text-sm text-[#5B6472] italic">
            <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>Model performance evaluated on a 30% hold-out test set from the combined K’Bang and Mang Yang pilot data. Capture @ 10% indicates the percentage of total deforestation events correctly identified within the top 10% highest-risk predicted areas.</p>
          </div>
        </section>

        {/* Figures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* ROC Curves */}
          <div className="bg-white p-6 rounded-2xl border border-[#D9E2DC] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-[#12372A]" />
                Model Validation (ROC)
              </h3>
              <span className="text-xs bg-[#F5F1E8] px-2 py-1 rounded font-bold border border-[#D9E2DC]">FIGURE 3</span>
            </div>
            <div className="aspect-[4/3] bg-[#F5F1E8] rounded-lg overflow-hidden border border-[#D9E2DC] flex items-center justify-center">
              <img src="/data/figures/Figure_ROC_split_HansenLoss.png" alt="ROC Curves" className="w-full h-full object-contain" />
            </div>
            <p className="mt-4 text-sm text-[#5B6472] leading-relaxed">
              Receiver Operating Characteristic (ROC) curves for the baseline, logistic regression, and random forest models. The Random Forest model demonstrates superior predictive power with an AUC of 0.892.
            </p>
          </div>

          {/* Feature Importance */}
          <div className="bg-white p-6 rounded-2xl border border-[#D9E2DC] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <PieChart className="h-6 w-6 text-[#12372A]" />
                Feature Importance (RF)
              </h3>
              <span className="text-xs bg-[#F5F1E8] px-2 py-1 rounded font-bold border border-[#D9E2DC]">FIGURE 6</span>
            </div>
            <div className="aspect-[4/3] bg-[#F5F1E8] rounded-lg overflow-hidden border border-[#D9E2DC] flex items-center justify-center">
              <img src="/data/figures/Figure6_RF_importance.png" alt="Feature Importance" className="w-full h-full object-contain" />
            </div>
            <p className="mt-4 text-sm text-[#5B6472] leading-relaxed">
              Relative importance of environmental and accessibility drivers. Road proximity, elevation, and vegetation indices (NDVI/NBR) are the primary predictors in the Gia Lai pilot study.
            </p>
          </div>
        </div>

        {/* Spatial Transferability */}
        <section className="mb-16">
          <div className="bg-[#12372A] rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#52B788]/20 border border-[#52B788]/30 text-[#52B788] text-xs font-bold uppercase tracking-widest mb-6">
                  Advanced Validation
                </div>
                <h2 className="text-3xl font-serif font-bold mb-6">Spatial Transferability</h2>
                <p className="text-lg text-[#D9E2DC] mb-8 leading-relaxed">
                  We tested the model's ability to predict risk in new geographical areas by training exclusively in K’Bang and testing in Mang Yang (and vice versa).
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-full bg-[#52B788]/20 flex items-center justify-center font-bold text-[#52B788]">
                      0.87
                    </div>
                    <div>
                      <div className="text-sm font-bold">K’Bang &rarr; Mang Yang</div>
                      <div className="text-xs text-[#5B6472]">AUC-ROC Performance</div>
                    </div>
                  </div>
                  <p className="text-sm text-[#D9E2DC]/80 italic">
                    * While transfer performance varies by district similarity, the high baseline transferability (AUC 0.87) suggests robust underlying drivers of deforestation across the province.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-xl overflow-hidden border border-white/10 p-2">
                   <img src="/data/figures/Figure_ROC_KBang_to_MangYang_HansenLoss.png" alt="Spatial Transfer ROC" className="w-full rounded-lg" />
                   <div className="text-[10px] text-[#12372A] font-bold text-center py-1 uppercase tracking-tight">K’Bang to Mang Yang Transfer ROC</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Downloads */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Raw Result Tables</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dataset Summary', file: 'Table2_dataset_summary.csv', icon: FileText },
              { name: 'Model Performance', file: 'Table3_model_performance_HansenLoss.csv', icon: BarChart3 },
              { name: 'Dataset Descriptions', file: 'Table1_datasets.csv', icon: Info }
            ].map((item, idx) => (
              <a 
                key={idx}
                href={`/data/results/${item.file}`}
                download
                className="flex items-center justify-between p-6 bg-white rounded-2xl border border-[#D9E2DC] hover:border-[#12372A] transition-all group no-underline"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#F5F1E8] flex items-center justify-center text-[#12372A] group-hover:bg-[#12372A] group-hover:text-white transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-[#12372A]">{item.name}</div>
                    <div className="text-xs text-[#5B6472]">CSV Data File</div>
                  </div>
                </div>
                <Download className="h-5 w-5 text-[#D9E2DC] group-hover:text-[#12372A]" />
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#12372A] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">Read the Full Manuscript</h2>
          <p className="text-[#D9E2DC] mb-8 max-w-xl mx-auto">
            Our full study, "An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution," is accepted for publication in Remote Sensing (MDPI).
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/publication" className="px-8 py-3 bg-[#52B788] text-[#12372A] rounded-full font-bold hover:bg-[#40916C] transition-colors flex items-center justify-center gap-2 no-underline">
              View Publication Details <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="/downloads/manuscript.docx" className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 no-underline">
              <Download className="h-4 w-4" /> Download Manuscript (.docx)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
