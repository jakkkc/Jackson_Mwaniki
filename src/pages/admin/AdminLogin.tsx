import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (signInError) {
      setError(signInError.message)
      return
    }

    navigate('/admin/projects')
  }

  return (
    <section className="max-w-md mx-auto px-6 py-24">
      <p className="uppercase tracking-widest text-xs text-pink-400 mb-5">Admin</p>
      <h1 className="uppercase text-3xl text-slate-100 mb-8 tracking-wide">Sign in</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case focus:outline-none focus:border-pink-400/50"
          />
        </div>

        <div>
          <label className="block uppercase text-xs tracking-widest text-slate-500 mb-2 font-sans normal-case">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 font-sans normal-case focus:outline-none focus:border-pink-400/50"
          />
        </div>

        {error && (
          <p className="text-pink-400 text-sm font-sans normal-case">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-sans normal-case font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </section>
  )
}
