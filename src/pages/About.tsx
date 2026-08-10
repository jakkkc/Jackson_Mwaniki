import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">
        About
      </p>
      <h1 className="uppercase text-4xl md:text-7xl leading-none mb-10">
        <span className="block text-slate-100">A bit about</span>
        <span className="block">
          <span className="text-blue-400">how</span>{' '}
          <span className="text-pink-400">I work</span>
        </span>
      </h1>

      <div className="space-y-6 font-sans normal-case text-slate-300 leading-relaxed max-w-3xl">
        <p>
          I am an AI native, execution focused professional currently
          pursuing an MSc in Digital Marketing, with a technical foundation
          in Applied Computer Technology. I sit somewhere between a
          marketer and an engineer, comfortable running a live community
          channel one day and shipping production software the next.
        </p>
        <p>
          I have experience managing real social community channels day to
          day, localizing SaaS platforms to fit real business needs instead
          of generic defaults, and independently building and shipping
          software that businesses actually use.
        </p>
        <p>
          AI tools like Claude and ChatGPT are part of how I work every
          day, not an occasional add on. I use them to move faster on
          development, sharpen content, and solve problems more
          efficiently, and I bring that same fluency into any team I join.
        </p>
        <p>
          I hold a BSc in Applied Computer Technology from USIU-Africa, I
          am Google Analytics certified, and I am currently pursuing an
          MSc in Digital Marketing online through edX. I am available 3 to
          4 days a week and can commit for at least 3 months, starting
          immediately.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity mt-4"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
