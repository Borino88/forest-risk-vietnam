'use client'

import { Database, Download, FileText, Quote, User, School, Mail } from 'lucide-react'

export default function PublicationPage() {
  const citation = "Pham, D.L.; Nguyen, D.A.; Do, N.Q.; Tran, D.A.; Dam, A.T. An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution. Remote Sensing, accepted, awaiting publication."

  const copyCitation = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(citation)
      alert("Citation copied to clipboard!")
    }
  }

  const authors = [
    { name: "Pham Duy Long", school: "The Olympia School", role: "First Author / Corresponding Author" },
    { name: "Nguyen Duc Anh", school: "Foreign Language Specialized School", role: "Co-Author" },
    { name: "Do Nhat Quang", school: "Vinschool The Harmony", role: "Co-Author" },
    { name: "Tran Dang An", school: "SMART LAB, FPT University", role: "Supervisor / Validation" },
    { name: "Dam Anh Thu", school: "Capital University of Physical Education and Sports", role: "Data Analysis" }
  ]

  return (
    <div className="bg-[#FAFAF7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#D9E2DC] shadow-sm overflow-hidden">
          <div className="bg-[#12372A] p-8 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#52B788] opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#52B788] text-xs font-bold uppercase tracking-widest mb-6">
                <span className="bg-[#52B788] text-[#12372A] px-2 py-0.5 rounded">Accepted — Awaiting Print</span>
                <span>•</span>
                <span>Remote Sensing (MDPI)</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-8 leading-tight">
                An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution
              </h1>
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-[#D9E2DC] text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" /> Leading Author: Pham Duy Long
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Contact: info@deforestation.xyz
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-[#12372A]" /> Abstract
                  </h2>
                  <p className="text-[#5B6472] leading-relaxed mb-8 text-justify">
                    Deforestation remains a critical environmental challenge in Vietnam, particularly in the central highlands. While remote sensing detection methods have improved significantly, proactive risk modeling remains underutilized in conservation planning. In this study, we present an interpretable machine learning pipeline designed to predict deforestation risk at a 1 km spatial resolution. Using a pilot study area in Gia Lai Province (K’Bang and Mang Yang districts), we integrate multi-source data from Google Earth Engine, including Hansen Global Forest Change, Global Forest Watch alerts, Sentinel-2 spectral indices, and topographic features. We evaluate three modeling approaches: a baseline risk score, logistic regression, and random forest. Our results demonstrate that the random forest model achieves high discriminative performance (AUC = 0.89) while logistic regression provides crucial insights into the direction and significance of risk drivers, such as proximity to roads and vegetation condition. This platform serves as a pilot implementation of a scalable framework for national forest-risk monitoring in Vietnam.
                  </p>
                  
                  <h3 className="font-bold text-[#12372A] mb-4 uppercase text-xs tracking-widest">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Deforestation Risk', 'Machine Learning', 'Vietnam', 'Google Earth Engine', 'Interpretable AI', 'Geospatial Analysis'].map((k, i) => (
                      <span key={i} className="px-3 py-1 bg-[#F5F1E8] text-[#12372A] text-xs font-bold rounded-full">{k}</span>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <User className="h-6 w-6 text-[#12372A]" /> Authors & Affiliations
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {authors.map((author, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-[#F5F1E8]/50 border border-[#D9E2DC]">
                        <div className="font-bold text-[#12372A] mb-1">{author.name}</div>
                        <div className="flex items-center gap-2 text-xs text-[#5B6472] mb-2">
                          <School className="h-3 w-3" /> {author.school}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-[#52B788]">{author.role}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="bg-[#12372A] p-8 rounded-2xl text-white">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-[#52B788] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-[#52B788]">Suggested Citation</h4>
                      <p className="text-sm text-[#D9E2DC] italic leading-relaxed mb-6">
                        {citation}
                      </p>
                      <button 
                        onClick={copyCitation} 
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition-colors uppercase tracking-widest"
                      >
                        Copy to Clipboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white border-2 border-[#12372A] rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#12372A] mb-4 uppercase text-xs tracking-widest">Journal Info</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-[#F5F1E8]">
                      <span className="text-[#5B6472]">Journal</span>
                      <span className="font-bold text-[#12372A]">Remote Sensing</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-[#F5F1E8]">
                      <span className="text-[#5B6472]">Publisher</span>
                      <span className="font-bold text-[#12372A]">MDPI</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-[#F5F1E8]">
                      <span className="text-[#5B6472]">Status</span>
                      <span className="font-bold text-[#2F9E44] bg-[#F1F9F5] px-2 py-1 rounded">Accepted</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#5B6472]">Print Date</span>
                      <span className="font-bold italic">Awaiting Print</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-[#12372A] uppercase text-xs tracking-widest px-2">Downloads</h3>
                  <a href="/downloads/manuscript.docx" className="w-full flex items-center justify-between gap-3 bg-[#12372A] text-white p-5 rounded-2xl font-bold hover:bg-[#2D6A4F] transition-all group no-underline shadow-lg shadow-[#12372A]/20">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5" /> Download MS (.docx)
                    </div>
                    <Download className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <p className="text-[10px] text-[#5B6472] px-2 italic">
                    * PDF version will be available following official journal publication.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F5F1E8] border border-[#D9E2DC]">
                  <h4 className="font-bold text-[#12372A] text-xs uppercase mb-3">Contact Corresponding Author</h4>
                  <div className="text-sm text-[#5B6472] mb-4 leading-relaxed">
                    For inquiries regarding methodology, data access, or institutional collaboration.
                  </div>
                  <a href="mailto:info@deforestation.xyz" className="text-sm font-bold text-[#12372A] hover:underline flex items-center gap-2">
                    <Mail className="h-4 w-4" /> info@deforestation.xyz
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
