'use client'

import { Database, Download, FileText, Quote, User } from 'lucide-react'

export default function PublicationPage() {
  const citation = "Pham, D.L.; Nguyen, D.A.; Do, N.Q.; Tran, D.A.; Dam, A.T. An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution. Remote Sensing, accepted, awaiting publication."

  const copyCitation = () => {
    navigator.clipboard.writeText(citation)
    alert("Citation copied to clipboard!")
  }

  return (
    <div className="bg-[#FAFAF7] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#D9E2DC] shadow-sm overflow-hidden">
          <div className="bg-[#12372A] p-12 text-white">
            <div className="flex items-center gap-2 text-[#52B788] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="bg-[#52B788] text-[#12372A] px-2 py-0.5 rounded">Accepted — Awaiting Print</span>
              <span>•</span>
              <span>Research Article</span>
            </div>
            <h1 className="text-4xl font-serif font-bold mb-6">
              An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution
            </h1>
            <div className="flex flex-wrap gap-6 text-[#D9E2DC] text-sm italic">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" /> Academic Research Team
              </div>
              <div>Gia Lai Province Pilot Study</div>
            </div>
          </div>

          <div className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Abstract</h2>
                <p className="text-[#5B6472] leading-relaxed mb-8 text-justify">
                  Deforestation remains a critical environmental challenge in Vietnam, particularly in the central highlands. While remote sensing detection methods have improved significantly, proactive risk modeling remains underutilized in conservation planning. In this study, we present an interpretable machine learning pipeline designed to predict deforestation risk at a 1 km spatial resolution. Using a pilot study area in Gia Lai Province (K’Bang and Mang Yang districts), we integrate multi-source data from Google Earth Engine, including Hansen Global Forest Change, Global Forest Watch alerts, Sentinel-2 spectral indices, and topographic features. We evaluate three modeling approaches: a baseline risk score, logistic regression, and random forest. Our results demonstrate that the random forest model achieves high discriminative performance (AUC = 0.92) while logistic regression provides crucial insights into the direction and significance of risk drivers, such as proximity to roads and vegetation condition. This platform serves as a pilot implementation of a scalable framework for national forest-risk monitoring in Vietnam.
                </p>
                
                <h3 className="font-bold text-[#12372A] mb-4 uppercase text-xs tracking-widest">Keywords</h3>
                <div className="flex flex-wrap gap-2 mb-12">
                  {['Deforestation Risk', 'Machine Learning', 'Vietnam', 'Google Earth Engine', 'Interpretable AI', 'Geospatial Analysis'].map((k, i) => (
                    <span key={i} className="px-3 py-1 bg-[#F5F1E8] text-[#12372A] text-xs font-bold rounded-full">{k}</span>
                  ))}
                </div>

                <div className="bg-[#F5F1E8] p-8 rounded-xl border border-[#D9E2DC]">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-[#12372A] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#12372A] mb-2">How to Cite</h4>
                      <p className="text-sm text-[#5B6472] italic leading-relaxed">
                        {citation}
                      </p>
                      <button onClick={copyCitation} className="mt-4 text-xs font-bold text-[#12372A] hover:underline uppercase tracking-wider">Copy Citation</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white border-4 border-[#52B788] rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#12372A] mb-4 uppercase text-xs tracking-widest">Research Status</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-[#5B6472]">Journal</span>
                      <span className="font-bold text-[#12372A]">Remote Sensing (MDPI)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#5B6472]">Status</span>
                      <span className="font-bold text-[#2F9E44] bg-[#F1F9F5] px-2 py-1 rounded">Accepted</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#5B6472]">Version</span>
                      <span className="font-bold">Final Accepted Manuscript</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#5B6472]">Date</span>
                      <span className="font-bold italic">Awaiting Print</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a href="/downloads/manuscript.pdf" download className="w-full flex items-center justify-between gap-3 bg-[#12372A] text-white p-4 rounded-xl font-bold hover:bg-[#2D6A4F] transition-all group">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5" /> Download PDF
                    </div>
                    <Download className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="/downloads/supplementary-files.zip" download className="w-full flex items-center justify-between gap-3 border-2 border-[#12372A] text-[#12372A] p-4 rounded-xl font-bold hover:bg-[#F5F1E8] transition-all group">
                    <div className="flex items-center gap-3">
                      <Database className="h-5 w-5" /> Supplementary Files
                    </div>
                    <Download className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
