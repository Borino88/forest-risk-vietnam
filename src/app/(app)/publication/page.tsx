'use client'

import { Database, Download, FileText, Quote, User, School, Mail, ExternalLink } from 'lucide-react'

export default function PublicationPage() {
  const citation = "Pham, D.L.; Nguyen, V.H.; Nguyen, D.A.; Do, N.Q.; Tran, D.A.; Dam, A.T. An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution. Remote Sensing, accepted, awaiting publication."

  const authors = [
    { name: "Pham Duy Long", school: "The Olympia School", role: "First Author / Corresponding Author" },
    { name: "Nguyen Vu Huy", school: "Vinschool The Harmony, Hanoi", role: "Co-Author" },
    { name: "Nguyen Duc Anh", school: "Foreign Language Specialized School", role: "Co-Author" },
    { name: "Do Nhat Quang", school: "Vinschool The Harmony", role: "Co-Author" },
    { name: "Tran Dang An", school: "SMART LAB, FPT University", role: "Supervisor / Validation" },
    { name: "Dam Anh Thu", school: "Capital University of Physical Education and Sports", role: "Data Analysis" }
  ]

  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#D9E2DC] shadow-sm overflow-hidden">
          {/* Hero Section - Reduced padding to fix gap */}
          <div className="bg-[#12372A] p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#52B788] opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#52B788] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                <span className="bg-[#52B788] text-[#12372A] px-2 py-0.5 rounded-sm">Accepted — Awaiting Print</span>
                <span>•</span>
                <span>Remote Sensing (MDPI)</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-6 leading-tight max-w-5xl">
                An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution
              </h1>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-[#D9E2DC] text-sm border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[#52B788]" /> 
                  <span>Corresponding Author: <span className="text-white font-medium">Pham Duy Long</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#52B788]" /> 
                  <a href="mailto:info@deforestation.xyz" className="text-[#D9E2DC] hover:text-white transition-colors">info@deforestation.xyz</a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1 bg-[#52B788]"></div>
                    <h2 className="text-2xl font-bold text-[#12372A]">Abstract</h2>
                  </div>
                  <p className="text-[#5B6472] leading-relaxed mb-6 text-justify text-base">
                    Deforestation remains a critical environmental challenge in Vietnam, particularly in the central highlands. While remote sensing detection methods have improved significantly, proactive risk modeling remains underutilized in conservation planning. In this study, we present an interpretable machine learning pipeline designed to predict deforestation risk at a 1 km spatial resolution. Using a pilot study area in Gia Lai Province (K’Bang and Mang Yang districts), we integrate multi-source data from Google Earth Engine, including Hansen Global Forest Change, Global Forest Watch alerts, Sentinel-2 spectral indices, and topographic features. We evaluate three modeling approaches: a baseline risk score, logistic regression, and random forest. Our results demonstrate that the random forest model achieves high discriminative performance (AUC = 0.89) while logistic regression provides crucial insights into the direction and significance of risk drivers, such as proximity to roads and vegetation condition. This platform serves as a pilot implementation of a scalable framework for national forest-risk monitoring in Vietnam.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Deforestation Risk', 'Machine Learning', 'Vietnam', 'Google Earth Engine', 'Interpretable AI'].map((k, i) => (
                      <span key={i} className="px-3 py-1 bg-[#F5F1E8] text-[#12372A] text-[11px] font-bold rounded border border-[#D9E2DC] uppercase tracking-wider">{k}</span>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-1 bg-[#52B788]"></div>
                    <h2 className="text-2xl font-bold text-[#12372A]">Authors & Affiliations</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {authors.map((author, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-[#FAFAF7] border border-[#D9E2DC] hover:border-[#12372A] transition-colors group">
                        <div className="font-bold text-[#12372A] mb-1 group-hover:text-[#52B788] transition-colors">{author.name}</div>
                        <div className="flex items-center gap-2 text-xs text-[#5B6472] mb-2">
                          <School className="h-3 w-3" /> {author.school}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#12372A]/40">{author.role}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <div className="bg-[#F5F1E8] rounded-2xl p-6 border border-[#D9E2DC]">
                  <h3 className="font-bold text-[#12372A] text-xs uppercase tracking-widest mb-4">Journal Metadata</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-[#D9E2DC]/50">
                      <span className="text-[#5B6472]">Publication</span>
                      <span className="font-bold text-[#12372A]">Remote Sensing</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#D9E2DC]/50">
                      <span className="text-[#5B6472]">Publisher</span>
                      <span className="font-bold text-[#12372A]">MDPI</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#D9E2DC]/50">
                      <span className="text-[#5B6472]">ISSN</span>
                      <span className="font-mono text-xs">2072-4292</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#5B6472]">Status</span>
                      <span className="font-bold text-[#2F9E44] flex items-center gap-1 uppercase text-[10px]">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#2F9E44] animate-pulse"></div>
                        In Production
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-[#12372A] text-xs uppercase tracking-widest px-1">Manuscript Access</h3>
                  <a href="/downloads/manuscript.docx" className="w-full flex items-center justify-between gap-3 bg-[#12372A] text-white p-5 rounded-2xl font-bold hover:bg-[#2D6A4F] transition-all group no-underline shadow-lg shadow-[#12372A]/10">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-[#52B788]" /> Download (.docx)
                    </div>
                    <Download className="h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
                  </a>
                  <button className="w-full flex items-center justify-between gap-3 border border-[#D9E2DC] bg-white text-[#5B6472] p-5 rounded-2xl font-bold cursor-not-allowed">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 opacity-30" /> Full PDF (Pending)
                    </div>
                    <ExternalLink className="h-5 w-5 opacity-20" />
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#D9E2DC]">
                  <h4 className="font-bold text-[#12372A] text-[10px] uppercase tracking-widest mb-3">Institutional Contact</h4>
                  <div className="text-xs text-[#5B6472] mb-4 leading-relaxed">
                    Access the complete experimental setup and validation master tables.
                  </div>
                  <a href="mailto:info@deforestation.xyz" className="text-sm font-bold text-[#12372A] hover:text-[#52B788] flex items-center gap-2 transition-colors">
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
