import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const whatsappHref = `https://wa.me/254742881370?text=${encodeURIComponent(
    `Hi Jackson, I'm ${name || '[your name]'}. ${message || "I'd like to talk about an opportunity."}`
  )}`

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">Contact</p>
      <h1 className="uppercase text-4xl md:text-7xl leading-none mb-6">
        <span className="block text-slate-100">Let's talk</span>
        <span className="block">
          <span className="text-blue-400">about</span>{' '}
          <span className="text-pink-400">opportunities</span>
        </span>
      </h1>
      <p className="text-slate-400 font-sans normal-case max-w-xl mb-14 leading-relaxed">
        Hiring, freelance, or just want to connect? Send a message and I'll
        get back to you. WhatsApp is the fastest way to reach me.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">
              Your name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Wanjiru"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case placeholder:text-slate-600 focus:outline-none focus:border-pink-400/50"
            />
          </div>

          <div>
            <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">
              What's this about
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about the role or opportunity"
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case placeholder:text-slate-600 focus:outline-none focus:border-pink-400/50 resize-none"
            />
          </div>

          
            <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-sans normal-case font-medium hover:opacity-90 transition-opacity"
          >
            Send on WhatsApp
          </a>
        </div>

        <div className="space-y-4">
          
            <a
            href="mailto:jacmwaniki@gmail.com"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors"
          >
            <Mail size={20} className="text-pink-400" />
            <div>
              <p className="text-slate-200 font-sans normal-case">jacmwaniki@gmail.com</p>
              <p className="text-slate-500 font-sans normal-case text-xs">Email</p>
            </div>
          </a>

          
            <a
            href="tel:+254742881370"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors"
          >
            <Phone size={20} className="text-blue-400" />
            <div>
              <p className="text-slate-200 font-sans normal-case">+254 742 881 370</p>
              <p className="text-slate-500 font-sans normal-case text-xs">Phone</p>
            </div>
          </a>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <p className="text-slate-200 font-sans normal-case mb-1">Based in Kenya</p>
            <p className="text-slate-500 font-sans normal-case text-xs">Available 3-4 days/week, 3+ months, starting immediately</p>
          </div>
        </div>
      </div>
    </section>
  )
}
