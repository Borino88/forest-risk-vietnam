import { Database, FileCode, Scale } from 'lucide-react'

export default function DataPolicyPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-8 text-[#12372A]">Data Usage Policy</h1>
        
        <div className="bg-white p-8 rounded-3xl border border-[#D9E2DC] shadow-sm space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-[#52B788]" /> Data Origins
            </h2>
            <p className="text-[#5B6472] leading-relaxed">
              Our pipeline integrates multi-source geospatial data including Hansen Global Forest Change, Global Forest Watch Integrated Alerts, Sentinel-2 (Copernicus), and SRTM Topographic data. These primary datasets remain the property of their respective creators and are used here under their respective public licenses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileCode className="h-5 w-5 text-[#52B788]" /> Research Outputs
            </h2>
            <p className="text-[#5B6472] leading-relaxed">
              Derived risk maps, warning zones, and model coefficients are products of the research project "An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution."
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Scale className="h-5 w-5 text-[#52B788]" /> Licensing & Citation
            </h2>
            <p className="text-[#5B6472] leading-relaxed">
              The derived geospatial outputs provided for download on this platform are available for academic, non-commercial research use. Users of these datasets are required to provide appropriate citation of the primary manuscript:
            </p>
            <div className="mt-4 p-5 bg-[#F5F1E8] rounded-xl border border-[#D9E2DC] text-xs italic text-[#12372A] leading-relaxed">
              Pham, D.L.; Nguyen, D.A.; Do, N.Q.; Tran, D.A.; Dam, A.T. An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution. Remote Sensing, accepted, awaiting publication.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">No Operational Guarantee</h2>
            <p className="text-[#5B6472] leading-relaxed">
              These outputs are provided "as-is" for research and prioritization. They are not intended for real-time operational enforcement and should be verified against local ground-truth data before any field intervention.
            </p>
          </section>

          <div className="pt-8 border-t border-[#D9E2DC] text-xs text-[#5B6472]">
            Last updated: April 30, 2026
          </div>
        </div>
      </div>
    </div>
  )
}
