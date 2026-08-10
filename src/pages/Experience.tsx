type Role = {
  title: string
  org: string
  dates: string
  points: string[]
}

const roles: Role[] = [
  {
    title: 'Digital & Ecommerce Assistant',
    org: 'Hunters Paradise Cottages',
    dates: '2025 \u2013 Present',
    points: [
      'Manage all official social media pages and day to day community engagement for the property, handling audience interaction and content publishing.',
      'Design and maintain internal business applications, including a full stack guest feedback platform (Ekwena Feedback System) live across multiple branches and outlets.',
      'Support digital and ecommerce operations, keeping online presence and guest facing channels running smoothly.',
    ],
  },
  {
    title: 'Intern',
    org: 'Outserve Technologies, Parklands, Nairobi',
    dates: 'May 2023 \u2013 Nov 2023',
    points: [
      'Learned and worked hands on with the Zoho suite, with a focus on Zoho Creator.',
      'Assisted in reselling Zoho by customizing Zoho Creator applications to fit individual client business needs, direct hands on experience localizing a platform to real operational requirements.',
      "Designed the company's logo.",
    ],
  },
]

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">
        Experience
      </p>
      <h1 className="uppercase text-4xl md:text-7xl leading-none mb-14">
        <span className="block text-slate-100">Where I've</span>
        <span className="block">
          <span className="text-blue-400">put</span>{' '}
          <span className="text-pink-400">in the work</span>
        </span>
      </h1>

      <div className="space-y-12 max-w-3xl">
        {roles.map((role) => (
          <div key={role.title} className="border-l-2 border-pink-400/30 pl-6">
            <p className="text-slate-500 font-sans normal-case text-xs mb-1">
              {role.dates}
            </p>
            <h3 className="uppercase text-2xl tracking-wide mb-1 font-light text-slate-100">
              {role.title}
            </h3>
            <p className="text-blue-400 font-sans normal-case text-sm mb-4">
              {role.org}
            </p>
            <ul className="space-y-2 font-sans normal-case text-sm text-slate-300">
              {role.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">&#10003;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
