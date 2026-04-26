import Link from 'next/link'
import { BarChart3, ChevronRight, FileText, PieChart } from 'lucide-react'

export default function ResultsPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6">Research Results</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            Quantitative and spatial evaluation of our deforestation risk pipeline across the Gia Lai pilot districts.
          </p>
        </div>

        {/* Comparison Table */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Model Performance Comparison</h2>
          <div className="overflow-x-auto bg-white rounded-xl border border-[#D9E2DC] shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#F5F1E8] text-[#12372A]">
                <tr>
                  <th className="px-6 py-4 font-bold">Model Type</th>
                  <th className="px-6 py-4 font-bold">AUC-ROC</th>
                  <th className="px-6 py-4 font-bold">Precision</th>
                  <th className="px-6 py-4 font-bold">Recall</th>
                  <th className="px-6 py-4 font-bold">Interpretability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F1E8]">
                <tr>
                  <td className="px-6 py-4 font-medium">Baseline Risk Score</td>
                  <td className="px-6 py-4">0.76</td>
                  <td className="px-6 py-4">0.65</td>
                  <td className="px-6 py-4">0.62</td>
                  <td className="px-6 py-4 text-[#2F9E44] font-bold">Very High</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Logistic Regression</td>
                  <td className="px-6 py-4">0.88</td>
                  <td className="px-6 py-4">0.79</td>
                  <td className="px-6 py-4">0.74</td>
                  <td className="px-6 py-4 text-[#2F9E44] font-bold">High</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium bg-[#F5F1E8]/20">Random Forest</td>
                  <td className="px-6 py-4 font-bold bg-[#F5F1E8]/20">0.92</td>
                  <td className="px-6 py-4 font-bold bg-[#F5F1E8]/20">0.86</td>
                  <td className="px-6 py-4 font-bold bg-[#F5F1E8]/20">0.81</td>
                  <td className="px-6 py-4 text-[#E67700] font-bold bg-[#F5F1E8]/20">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[#5B6472] italic">
            * Results based on K’Bang and Mang Yang cross-validation sets.
          </p>
        </section>

        {/* Key Figures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-[#D9E2DC] shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <PieChart className="h-6 w-6 text-[#12372A]" />
                Feature Importance (RF)
              </h3>
              <span className="text-xs bg-[#F5F1E8] px-2 py-1 rounded font-bold">Fig 4.2</span>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Distance to nearest road', val: 0.35 },
                { label: 'NDVI (Sentinel-2)', val: 0.22 },
                { label: 'Baseline Tree Cover', val: 0.18 },
                { label: 'Slope (SRTM)', val: 0.12 },
                { label: 'GFW Alert Signal', val: 0.08 }
              ].map((f, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{f.label}</span>
                    <span className="font-bold">{f.val}</span>
                  </div>
                  <div className="w-full bg-[#F5F1E8] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#12372A] h-full" style={{ width: `${f.val * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#5B6472]">
              Proximity to roads remains the strongest predictor of deforestation risk in the pilot area, followed by vegetation health indices.
            </p>
          </div>

          <div className="bg-[#12372A] p-8 rounded-2xl text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-[#52B788]" />
                Spatial Generalization
              </h3>
              <p className="text-[#D9E2DC] mb-6 leading-relaxed">
                We tested the model's ability to generalize by training in K’Bang and predicting in Mang Yang. The model maintained an AUC of 0.86, demonstrating robust spatial transferability within the province.
              </p>
            </div>
            <div className="bg-[#2D6A4F] p-4 rounded-lg">
              <div className="text-xs font-bold uppercase tracking-widest text-[#52B788] mb-2">Conclusion</div>
              <p className="text-sm">
                The interpretable pipeline effectively identifies risk hotspots even in districts it has not seen during training.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border-2 border-[#12372A] rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore the Spatial Outputs</h2>
          <p className="text-[#5B6472] mb-8 max-w-xl mx-auto">
            View the high-resolution probability maps and warning zones directly on our interactive GIS platform.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/map" className="btn-primary flex items-center gap-2">
              Open Interactive Map <ChevronRight className="h-4 w-4" />
            </Link>
            <Link href="/publication" className="btn-secondary flex items-center gap-2">
              <FileText className="h-4 w-4" /> Read Full Paper
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
