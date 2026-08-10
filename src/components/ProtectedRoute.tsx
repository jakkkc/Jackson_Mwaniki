import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { session, loading } = useAuth()

  if (loading) {
    return <div className="max-w-6xl mx-auto px-6 py-16 text-slate-400">Loading...</div>
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}
