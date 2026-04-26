import { Linkedin, Mail } from 'lucide-react'

export default function TeamPage() {
  const team = [
    {
      name: 'Nguyen Van A',
      role: 'Student Researcher',
      bio: 'Specializing in satellite image processing and Google Earth Engine pipeline development.',
      affiliation: 'Environmental Science Dept.'
    },
    {
      name: 'Tran Thi B',
      role: 'ML Engineer',
      bio: 'Focused on interpretable machine learning models and feature engineering for geospatial data.',
      affiliation: 'AI Lab'
    },
    {
      name: 'Dr. Pham Minh C',
      role: 'Supervisor',
      bio: 'Research lead with expertise in climate modeling and sustainable land management.',
      affiliation: 'Research Institute'
    },
    {
      name: 'Le Hoang D',
      role: 'Data Validation',
      bio: 'Ensuring ground-truth accuracy and dataset harmonization across the Gia Lai pilot.',
      affiliation: 'Geospatial Dept.'
    }
  ]

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6">Our Team</h1>
          <p className="text-xl text-[#5B6472] max-w-3xl leading-relaxed">
            A collaborative team of environmental scientists and AI researchers dedicated to transparent forest monitoring in Vietnam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <div key={i} className="bg-[#F5F1E8] p-8 rounded-2xl border border-[#D9E2DC] flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-[#12372A] text-[#52B788] flex items-center justify-center text-3xl font-bold mb-6 border-4 border-white shadow-md">
                {m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-lg font-bold text-[#12372A] mb-1">{m.name}</h3>
              <div className="text-xs font-bold text-[#52B788] uppercase tracking-widest mb-4">{m.role}</div>
              <p className="text-sm text-[#5B6472] mb-6 leading-relaxed flex-1 italic">
                "{m.bio}"
              </p>
              <div className="text-xs text-[#5B6472] mb-6 font-medium">{m.affiliation}</div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-[#12372A] hover:text-[#52B788] cursor-pointer" />
                <Linkedin className="h-5 w-5 text-[#12372A] hover:text-[#52B788] cursor-pointer" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-[#12372A] rounded-2xl text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Want to Collaborate?</h2>
          <p className="text-[#D9E2DC] max-w-2xl mx-auto mb-8">
            We are always looking for academic collaborators, dataset contributors, and students interested in environmental AI.
          </p>
          <a href="/contact" className="bg-[#52B788] text-[#12372A] px-8 py-3 rounded-md font-bold hover:bg-white transition-all inline-block">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
