import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useNavigate } from 'react-router-dom'

type Project = {
  id: string
  name: string
  description: string
  stack: string | null
  status: string | null
  logo_url: string | null
  link: string | null
  sort_order: number
}

const emptyForm = {
  name: '',
  description: '',
  stack: '',
  status: '',
  logo_url: '',
  link: '',
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const navigate = useNavigate()

  const loadProjects = async () => {
    setLoading(true)
    const { data, error } = await supabase.from('projects').select('*').order('sort_order', { ascending: true })
    if (!error && data) setProjects(data)
    setLoading(false)
  }

  useEffect(() => {
    loadProjects()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  const resetForm = () => {
    setForm(emptyForm)
    setEditingId(null)
    setLogoFile(null)
  }

  const handleEdit = (project: Project) => {
    setForm({
      name: project.name,
      description: project.description,
      stack: project.stack ?? '',
      status: project.status ?? '',
      logo_url: project.logo_url ?? '',
      link: project.link ?? '',
    })
    setEditingId(project.id)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this project?')) return
    await supabase.from('projects').delete().eq('id', id)
    loadProjects()
  }

  const uploadLogo = async (): Promise<string | null> => {
    if (!logoFile) return form.logo_url || null
    const fileExt = logoFile.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const { error } = await supabase.storage.from('project-logos').upload(fileName, logoFile)
    if (error) {
      alert('Logo upload failed: ' + error.message)
      return null
    }
    const { data } = supabase.storage.from('project-logos').getPublicUrl(fileName)
    return data.publicUrl
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const logoUrl = await uploadLogo()

    const payload = {
      name: form.name,
      description: form.description,
      stack: form.stack || null,
      status: form.status || null,
      logo_url: logoUrl,
      link: form.link || null,
    }

    if (editingId) {
      await supabase.from('projects').update(payload).eq('id', editingId)
    } else {
      await supabase.from('projects').insert(payload)
    }

    setSaving(false)
    resetForm()
    loadProjects()
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="uppercase tracking-widest text-xs text-pink-400 mb-2">Admin</p>
          <h1 className="uppercase text-3xl text-slate-100 tracking-wide">Projects</h1>
        </div>
        <button type="button" onClick={handleLogout} className="text-slate-400 hover:text-pink-400 transition-colors font-sans normal-case text-sm">
          Sign out
        </button>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 mb-10 space-y-4">
        <h2 className="uppercase text-lg text-slate-200 tracking-wide mb-2">
          {editingId ? 'Edit project' : 'Add a project'}
        </h2>

        <div>
          <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">Name</label>
          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case focus:outline-none focus:border-pink-400/50" />
        </div>

        <div>
          <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">Description</label>
          <textarea required rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case focus:outline-none focus:border-pink-400/50 resize-none" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">Stack (optional)</label>
            <input type="text" placeholder="React, Supabase, Tailwind" value={form.stack} onChange={(e) => setForm({ ...form, stack: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case placeholder:text-slate-600 focus:outline-none focus:border-pink-400/50" />
          </div>

          <div>
            <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">Status (optional)</label>
            <input type="text" placeholder="Live, Active build..." value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case placeholder:text-slate-600 focus:outline-none focus:border-pink-400/50" />
          </div>
        </div>

        <div>
          <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">Link (optional)</label>
          <input type="url" placeholder="https://..." value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case placeholder:text-slate-600 focus:outline-none focus:border-pink-400/50" />
        </div>

        <div>
          <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">Logo (optional)</label>
          <input type="file" accept="image/*" onChange={(e) => setLogoFile(e.target.files?.[0] ?? null)} className="w-full text-slate-400 font-sans normal-case text-sm" />
          {form.logo_url && !logoFile && (
            <img src={form.logo_url} alt="Current logo" className="h-12 w-12 mt-2 rounded-lg object-cover" />
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-sans normal-case font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
            {saving ? 'Saving...' : editingId ? 'Update project' : 'Add project'}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="border border-white/20 text-slate-300 px-6 py-3 rounded-full font-sans normal-case font-medium hover:bg-white/5 transition-colors">
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2 className="uppercase text-lg text-slate-200 tracking-wide mb-4">Existing projects</h2>

      {loading ? (
        <p className="text-slate-500 font-sans normal-case">Loading...</p>
      ) : projects.length === 0 ? (
        <p className="text-slate-500 font-sans normal-case">No projects yet.</p>
      ) : (
        <div className="space-y-3">
          {projects.map((project) => (
            <div key={project.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                {project.logo_url && (
                  <img src={project.logo_url} alt="" className="h-10 w-10 rounded-lg object-cover" />
                )}
                <div>
                  <p className="text-slate-200 font-sans normal-case">{project.name}</p>
                  <p className="text-slate-500 font-sans normal-case text-xs">{project.status}</p>
                </div>
              </div>
              <div className="flex gap-3 font-sans normal-case text-sm">
                <button type="button" onClick={() => handleEdit(project)} className="text-blue-400 hover:text-blue-300 transition-colors">
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(project.id)} className="text-pink-400 hover:text-pink-300 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
