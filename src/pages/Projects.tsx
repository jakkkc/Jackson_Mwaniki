import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

type Project = {
  id: string
  name: string
  description: string
  stack: string | null
  status: string | null
  logo_url: string | null
  link: string | null
}

const accents = ['from-pink-400 to-blue-400', 'from-blue-400 to-pink-400']

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true })
      .then(({ data, error }) => {
        if (!error && data) setProjects(data)
        setLoading(false)
      })
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">Projects</p>
      <h1 className="uppercase text-4xl md:text-7xl leading-none mb-6">
        <span className="block text-slate-100">Things I've</span>
        <span className="block">
          <span className="text-blue-400">actually</span>{' '}
          <span className="text-pink-400">shipped</span>
        </span>
      </h1>
      <p className="text-slate-400 font-sans normal-case max-w-xl mb-14 leading-relaxed">
        Real software, used by real businesses, not tutorials or mockups.
      </p>

      {loading ? (
        <p className="text-slate-500 font-sans normal-case">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-slate-500 font-sans normal-case">No projects yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col hover:bg-white/10 hover:border-pink-400/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
              <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${accents[index % 2]} mb-6`} />
              {project.logo_url && (
                <img src={project.logo_url} alt="" className="h-12 w-12 rounded-lg object-cover mb-4" />
              )}
              {project.status && (
                <p className="uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">{project.status}</p>
              )}
              <h3 className="uppercase text-2xl tracking-wide mb-4 font-light text-slate-100">{project.name}</h3>
              <p className="text-slate-400 font-sans normal-case text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              {project.stack && (
                <p className="text-slate-600 font-sans normal-case text-xs mb-2">{project.stack}</p>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="text-pink-400 font-sans normal-case text-sm hover:text-pink-300 transition-colors">
                  View project &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
