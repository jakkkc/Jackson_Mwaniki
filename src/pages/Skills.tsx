type SkillGroup = {
  title: string
  items: string[]
  accent: string
}

const skillGroups: SkillGroup[] = [
  {
    title: 'AI Tools',
    items: ['Claude', 'ChatGPT', 'Daily use for development, content & problem-solving'],
    accent: 'from-pink-400 to-blue-400',
  },
  {
    title: 'Technical',
    items: ['React', 'TypeScript', 'Next.js', 'Supabase', 'Firebase', 'Tailwind CSS'],
    accent: 'from-blue-400 to-pink-400',
  },
  {
    title: 'Platforms',
    items: ['Zoho Creator', 'Google Analytics'],
    accent: 'from-pink-400 to-blue-400',
  },
  {
    title: 'Marketing & Content',
    items: ['Community management', 'Content creation', 'Campaign execution'],
    accent: 'from-blue-400 to-pink-400',
  },
]

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">Skills</p>
      <h1 className="uppercase text-4xl md:text-7xl leading-none mb-14">
        <span className="block text-slate-100">What I bring</span>
        <span className="block">
          <span className="text-blue-400">to</span>{' '}
          <span className="text-pink-400">the table</span>
        </span>
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${group.accent} mb-6`} />
            <h3 className="uppercase text-xl tracking-wide mb-4 font-light text-slate-100">
              {group.title}
            </h3>
            <ul className="space-y-2 font-sans normal-case text-sm text-slate-300">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-pink-400/30 bg-gradient-to-br from-pink-500/10 to-blue-500/10 p-8">
        <h3 className="uppercase text-xl tracking-wide mb-3 font-light text-slate-100">Core</h3>
        <p className="text-slate-300 font-sans normal-case text-sm leading-relaxed max-w-2xl">
          Strong sense of ownership and execution. Comfortable managing
          multiple tasks, meeting deadlines, and delivering high quality
          work in a fast paced environment.
        </p>
      </div>
    </section>
  )
}
