type Project = {
  name: string
  status: string
  description: string
  stack: string
  accent: string
}

const projects: Project[] = [
  {
    name: 'Ekwena Feedback System',
    status: 'Live in production',
    description:
      'A full stack, role based guest feedback platform built for a two branch hotel and restaurant group, from database schema to a live installable web app. Built end to end with AI assisted development.',
    stack: 'Next.js, Supabase, Tailwind CSS',
    accent: 'from-pink-400 to-blue-400',
  },
  {
    name: 'NexBookings',
    status: 'Active build',
    description:
      'A booking management system built for local hotels, Airbnbs, and guest houses in Kenya. Owners manage properties, rooms, and bookings, and track payments.',
    stack: 'React, TypeScript, Vite, Supabase',
    accent: 'from-blue-400 to-pink-400',
  },
  {
    name: 'Shift Management App',
    status: 'Live demo',
    description:
      'Browser based shift scheduling for hospitality teams. Aware of Kenyan public holidays, tracks annual leave accrual, and handles split shifts.',
    stack: 'React, TypeScript',
    accent: 'from-pink-400 to-blue-400',
  },
  {
    name: 'Manguo POS',
    status: 'Live demo',
    description:
      'A full featured point of sale system built for Kenyan retail clothing shops, handling product variants, sales history, and credit accounts.',
    stack: 'Firebase, React',
    accent: 'from-blue-400 to-pink-400',
  },
]

export default function Projects() {
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

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col hover:bg-white/10 hover:border-pink-400/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
            <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${project.accent} mb-6`} />
            <p className="uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">
              {project.status}
            </p>
            <h3 className="uppercase text-2xl tracking-wide mb-4 font-light text-slate-100">
              {project.name}
            </h3>
            <p className="text-slate-400 font-sans normal-case text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <p className="text-slate-600 font-sans normal-case text-xs">
              {project.stack}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
