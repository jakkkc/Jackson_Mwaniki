import { Link } from 'react-router-dom'
import heroPhoto from '../assets/images/profile.png'
import FramedImage from '../components/FramedImage'

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 text-left">
        <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">
          Strategist. Engineer. AI Native.
        </p>

        <h1 className="uppercase leading-none mb-6 tracking-wide">
          <span className="block text-3xl md:text-4xl text-slate-100">Product</span>
          <span className="block text-4xl md:text-8xl text-slate-100">Operations</span>
          <span className="block text-3xl md:text-4xl text-blue-400 mt-2">
            & Digital
          </span>
          <span className="block text-4xl md:text-8xl text-pink-400">
            Execution
          </span>
        </h1>

        <p className="text-slate-400 mb-6 mt-6 max-w-md font-sans normal-case text-base leading-relaxed">
          I build software, run live community channels, and localize
          products to fit real markets, all using AI tools daily to move
          faster and deliver better work.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-sans font-medium normal-case hover:opacity-90 transition-opacity"
        >
          Get in touch
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center md:items-end gap-5">
        <div className="font-sans normal-case bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 text-xs text-slate-300 flex items-center gap-2">
          <span className="text-pink-400">&#9679;</span>
          Available now &middot; 3\u20134 days/week
        </div>

        <FramedImage
          src={heroPhoto}
          alt="Jackson Mwaniki"
          className="w-64 md:w-80"
        />
      </div>
    </section>
  )
}
