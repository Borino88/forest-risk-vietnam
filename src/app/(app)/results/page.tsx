import Link from 'next/link'
import { BarChart3, FileText, PieChart, Info, Download, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Research Results & Model Validation',
  description: 'Comprehensive evaluation metrics, ROC curves, and feature importance analysis for the deforestation risk prediction model.',
}

export default function ResultsPage() {
  return (
    <article className="bg-[#FAFAF7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-6 text-[#12372A]">Research Results</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Detailed quantitative and spatial evaluation of our deforestation risk pipeline, validated against Hansen Global Forest Change data (2001-2023) for the Gia Lai pilot districts.
          </p>
        </header>

        {/* Model Performance Table */}
        <section className="mb-16" aria-labelledby="model-performance">
          <div className="flex items-center justify-between mb-6">
            <h2 id="model-performance" className="text-2xl font-bold text-[#12372A]">Model Performance (Internal Split)</h2>
            <span className="text-[10px] bg-[#F5F1E8] px-3 py-1 rounded-sm font-bold text-[#12372A] border border-[#D9E2DC] uppercase tracking-widest">Table 3</span>
          </div>
          <div className="overflow-x-auto bg-white rounded-2xl border border-[#D9E2DC] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#FAFAF7] text-[#12372A] border-b border-[#D9E2DC]">
                <tr>
                  <th className="px-6 py-5 font-bold uppercase text-[10px] tracking-widest">Model</th>
                  <th className="px-6 py-5 font-bold uppercase text-[10px] tracking-widest">AUC-ROC</th>
                  <th className="px-6 py-5 font-bold uppercase text-[10px] tracking-widest">Precision</th>
                  <th className="px-6 py-5 font-bold uppercase text-[10px] tracking-widest">Recall</th>
                  <th className="px-6 py-5 font-bold uppercase text-[10px] tracking-widest">F1 Score</th>
                  <th className="px-6 py-5 font-bold uppercase text-[10px] tracking-widest">Capture @ 10%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F1E8]">
                <tr className="hover:bg-[#FAFAF7] transition-colors">
                  <td className="px-6 py-5 font-medium text-[#5B6472]">Baseline (Road Dist)</td>
                  <td className="px-6 py-5 text-[#5B6472]">0.563</td>
                  <td className="px-6 py-5 text-[#5B6472]">0.579</td>
                  <td className="px-6 py-5 text-[#5B6472]">0.974</td>
                  <td className="px-6 py-5 text-[#5B6472]">0.726</td>
                  <td className="px-6 py-5 text-[#5B6472]">12.2%</td>
                </tr>
                <tr className="hover:bg-[#FAFAF7] transition-colors">
                  <td className="px-6 py-5 font-medium text-[#5B6472]">Logistic Regression</td>
                  <td className="px-6 py-5 text-[#5B6472]">0.788</td>
                  <td className="px-6 py-5 text-[#5B6472]">0.663</td>
                  <td className="px-6 py-5 text-[#5B6472]">0.851</td>
                  <td className="px-6 py-5 text-[#5B6472]">0.745</td>
                  <td className="px-6 py-5 text-[#5B6472]">17.6%</td>
                </tr>
                <tr className="bg-[#52B788]/10 hover:bg-[#52B788]/20 transition-colors">
                  <td className="px-6 py-5 font-bold text-[#12372A] flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788]" aria-hidden="true"></div>
                    Random Forest (Best)
                  </td>
                  <td className="px-6 py-5 font-bold text-[#12372A]">0.892</td>
                  <td className="px-6 py-5 font-bold text-[#12372A]">0.806</td>
                  <td className="px-6 py-5 font-bold text-[#12372A]">0.856</td>
                  <td className="px-6 py-5 font-bold text-[#12372A]">0.830</td>
                  <td className="px-6 py-5 font-bold text-[#12372A]">17.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-[#E8F0ED] rounded-xl flex items-start gap-3 border border-[#D9E2DC]">
            <Info className="h-5 w-5 mt-0.5 text-[#12372A] flex-shrink-0" aria-hidden="true" />
            <p className="text-sm text-[#12372A] leading-relaxed">
              <strong>Validation Context:</strong> Model performance evaluated on a 30% hold-out test set from the combined K’Bang and Mang Yang pilot data. <em>Capture @ 10%</em> indicates the percentage of total deforestation events correctly identified within the top 10% highest-risk predicted areas.
            </p>
          </div>
        </section>

        {/* Figures Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" aria-label="Key Figures">
          {/* ROC Curves */}
          <figure className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm flex flex-col">
            <figcaption className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold flex items-center gap-3 text-[#12372A]">
                <div className="p-2 bg-[#F5F1E8] rounded-lg">
                  <BarChart3 className="h-5 w-5 text-[#12372A]" aria-hidden="true" />
                </div>
                Model Validation (ROC)
              </h3>
              <span className="text-[10px] bg-[#F5F1E8] px-2 py-1 rounded-sm font-bold border border-[#D9E2DC] uppercase tracking-widest text-[#12372A]">Figure 3</span>
            </figcaption>
            <div className="aspect-[4/3] bg-[#FAFAF7] rounded-xl overflow-hidden border border-[#D9E2DC] flex items-center justify-center p-4">
              <img src="/data/figures/Figure_ROC_split_HansenLoss.png" alt="ROC Curves comparing Baseline, Logistic Regression, and Random Forest models" className="w-full h-full object-contain" loading="lazy" />
            </div>
            <p className="mt-6 text-sm text-[#5B6472] leading-relaxed">
              Receiver Operating Characteristic (ROC) curves for the evaluated models. The Random Forest model demonstrates superior predictive power with an AUC of 0.892, significantly outperforming the baseline heuristic.
            </p>
          </figure>

          {/* Feature Importance */}
          <figure className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm flex flex-col">
            <figcaption className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold flex items-center gap-3 text-[#12372A]">
                <div className="p-2 bg-[#F5F1E8] rounded-lg">
                  <PieChart className="h-5 w-5 text-[#12372A]" aria-hidden="true" />
                </div>
                Feature Importance (RF)
              </h3>
              <span className="text-[10px] bg-[#F5F1E8] px-2 py-1 rounded-sm font-bold border border-[#D9E2DC] uppercase tracking-widest text-[#12372A]">Figure 6</span>
            </figcaption>
            <div className="aspect-[4/3] bg-[#FAFAF7] rounded-xl overflow-hidden border border-[#D9E2DC] flex items-center justify-center p-4">
              <img src="/data/figures/Figure6_RF_importance.png" alt="Bar chart showing relative importance of environmental and accessibility drivers" className="w-full h-full object-contain" loading="lazy" />
            </div>
            <p className="mt-6 text-sm text-[#5B6472] leading-relaxed">
              Relative importance of environmental and accessibility drivers. Road proximity, elevation, and vegetation condition indices (NDVI/NBR) emerge as the primary predictive signals in the Gia Lai pilot study.
            </p>
          </figure>
        </section>

        {/* Spatial Transferability */}
        <section className="mb-16" aria-labelledby="spatial-transferability">
          <div className="bg-[#12372A] rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000')] bg-cover bg-center opacity-10" aria-hidden="true" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#52B788]/20 border border-[#52B788]/30 text-[#52B788] text-[10px] font-bold uppercase tracking-widest mb-6">
                  Advanced Validation
                </div>
                <h2 id="spatial-transferability" className="text-4xl font-serif font-bold mb-6">Spatial Transferability</h2>
                <p className="text-lg text-[#D9E2DC] mb-10 leading-relaxed font-light">
                  To assess operational scalability, we tested the model's ability to predict risk in novel geographies by training exclusively in K’Bang District and testing on the Mang Yang District landscape.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 rounded-full bg-[#52B788] flex items-center justify-center font-serif font-bold text-2xl text-[#12372A] shadow-lg">
                      0.87
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-1">K’Bang &rarr; Mang Yang</div>
                      <div className="text-xs text-[#52B788] uppercase tracking-widest font-bold">AUC-ROC Performance</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#D9E2DC] leading-relaxed">
                    The high baseline transferability (AUC 0.87) suggests robust, generalizable underlying drivers of deforestation across the province.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <figure className="bg-white rounded-2xl overflow-hidden border border-[#D9E2DC] p-4 shadow-xl">
                   <img src="/data/figures/Figure_ROC_KBang_to_MangYang_HansenLoss.png" alt="ROC curve showing model performance when trained on K'Bang and tested on Mang Yang" className="w-full rounded-xl" loading="lazy" />
                   <figcaption className="text-[10px] text-[#5B6472] font-bold text-center pt-3 uppercase tracking-widest">Spatial Transfer ROC Curve</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Data Downloads */}
        <section className="mb-20" aria-labelledby="raw-results">
          <h2 id="raw-results" className="text-2xl font-bold mb-8 text-[#12372A]">Export Research Data</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dataset Summary', file: 'Table2_dataset_summary.csv', icon: FileText, desc: 'Descriptive statistics' },
              { name: 'Model Performance', file: 'Table3_model_performance_HansenLoss.csv', icon: BarChart3, desc: 'Full AUC/AP metrics' },
              { name: 'Dataset Descriptions', file: 'Table1_datasets.csv', icon: Info, desc: 'Variable definitions' }
            ].map((item, idx) => (
              <a 
                key={idx}
                href={`/data/results/${item.file}`}
                download
                className="flex items-center justify-between p-6 bg-white rounded-2xl border border-[#D9E2DC] hover:border-[#52B788] hover:shadow-md transition-all group no-underline"
                aria-label={`Download ${item.name} CSV file`}
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#FAFAF7] border border-[#D9E2DC] flex items-center justify-center text-[#12372A] group-hover:bg-[#12372A] group-hover:text-white transition-colors">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-bold text-[#12372A] group-hover:text-[#52B788] transition-colors">{item.name}</div>
                    <div className="text-[10px] text-[#5B6472] uppercase tracking-widest mt-1">{item.desc}</div>
                  </div>
                </div>
                <Download className="h-5 w-5 text-[#D9E2DC] group-hover:text-[#52B788] transition-colors" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border border-[#D9E2DC] rounded-[3rem] p-12 lg:p-16 text-center shadow-sm relative overflow-hidden" aria-label="Call to Action">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#52B788] opacity-5 rounded-full -mr-32 -mt-32" aria-hidden="true"></div>
          <h2 className="text-3xl font-serif font-bold mb-6 text-[#12372A] relative z-10">Read the Full Manuscript</h2>
          <p className="text-[#5B6472] mb-10 max-w-2xl mx-auto leading-relaxed text-lg relative z-10">
            For a comprehensive discussion of these results, methodologies, and conservation implications, please review the complete academic manuscript.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 relative z-10">
            <Link href="/publication" className="px-8 py-4 bg-[#12372A] text-white rounded-xl font-bold hover:bg-[#2D6A4F] transition-all flex items-center justify-center gap-3 no-underline shadow-lg shadow-[#12372A]/20">
              View Publication Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="/downloads/manuscript.docx" className="px-8 py-4 bg-white border border-[#D9E2DC] text-[#12372A] rounded-xl font-bold hover:bg-[#F5F1E8] transition-all flex items-center justify-center gap-3 no-underline">
              <Download className="h-4 w-4 text-[#52B788]" aria-hidden="true" /> Download Manuscript (.docx)
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}