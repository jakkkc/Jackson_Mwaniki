import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

type ContentRow = {
  key: string
  value: string
}

const labels: Record<string, string> = {
  home_eyebrow: 'Home — Eyebrow text',
  home_headline_line1: 'Home — Headline line 1',
  home_headline_line2: 'Home — Headline line 2 (large)',
  home_headline_line3: 'Home — Headline line 3',
  home_headline_line4: 'Home — Headline line 4 (large)',
  home_subtext: 'Home — Subtext paragraph',
  home_badge: 'Home — Availability badge',
  about_paragraph_1: 'About — Paragraph 1',
  about_paragraph_2: 'About — Paragraph 2',
  about_paragraph_3: 'About — Paragraph 3',
  about_paragraph_4: 'About — Paragraph 4',
  contact_availability: 'Contact — Availability line',
}

export default function AdminContent() {
  const [rows, setRows] = useState<ContentRow[]>([])
  const [loading, setLoading] = useState(true)
  const [savingKey, setSavingKey] = useState<string | null>(null)
  const navigate = useNavigate()

  const loadContent = async () => {
    setLoading(true)
    const { data, error } = await supabase.from('site_content').select('key, value').order('key')
    if (!error && data) setRows(data)
    setLoading(false)
  }

  useEffect(() => {
    loadContent()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  const handleChange = (key: string, value: string) => {
    setRows((prev) => prev.map((row) => (row.key === key ? { ...row, value } : row)))
  }

  const handleSave = async (key: string, value: string) => {
    setSavingKey(key)
    await supabase.from('site_content').update({ value }).eq('key', key)
    setSavingKey(null)
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="uppercase tracking-widest text-xs text-pink-400 mb-2">Admin</p>
          <h1 className="uppercase text-3xl text-slate-100 tracking-wide">Site content</h1>
        </div>
        <button type="button" onClick={handleLogout} className="text-slate-400 hover:text-pink-400 transition-colors font-sans normal-case text-sm">
          Sign out
        </button>
      </div>

      <Link to="/admin/projects" className="text-blue-400 hover:text-blue-300 transition-colors font-sans normal-case text-sm mb-10 inline-block">
        &larr; Back to Projects admin
      </Link>

      {loading ? (
        <p className="text-slate-500 font-sans normal-case">Loading...</p>
      ) : (
        <div className="space-y-6">
          {rows.map((row) => (
            <div key={row.key} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">
                {labels[row.key] ?? row.key}
              </label>
              <textarea
                value={row.value}
                onChange={(e) => handleChange(row.key, e.target.value)}
                rows={row.value.length > 100 ? 4 : 1}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case focus:outline-none focus:border-pink-400/50 resize-none mb-3"
              />
              <button
                type="button"
                onClick={() => handleSave(row.key, row.value)}
                disabled={savingKey === row.key}
                className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-sans normal-case text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {savingKey === row.key ? 'Saving...' : 'Save'}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
