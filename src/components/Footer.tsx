import { Mail, Phone, Rss } from 'lucide-react'

const contactLinks = [
  {
    href: 'mailto:jacmwaniki@gmail.com',
    label: 'jacmwaniki@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    href: 'tel:+254742881370',
    label: '+254 742 881 370',
    icon: Phone,
    external: false,
  },
  {
    href: 'https://substack.com/@nexink?r=8cf1uv&utm_campaign=profile&utm_medium=profile-page',
    label: 'Substack',
    icon: Rss,
    external: true,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center font-sans normal-case">
        <p className="uppercase tracking-widest text-xs text-slate-400 mb-6">
          Jackson <span className="text-pink-400">Mwaniki</span>
        </p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400 mb-8">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <li key={link.href}>
                <a
                
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-600 font-sans normal-case">
        &copy; {new Date().getFullYear()} Jackson Mwaniki. All rights reserved.
      </div>
    </footer>
  )
}
