import { useEffect, useState } from 'react'
import { supabase } from './supabase'

export function useSiteContent(keys: string[]) {
  const [content, setContent] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('site_content')
      .select('key, value')
      .in('key', keys)
      .then(({ data, error }) => {
        if (!error && data) {
          const map: Record<string, string> = {}
          data.forEach((row) => {
            map[row.key] = row.value
          })
          setContent(map)
        }
        setLoading(false)
      })
  }, [])

  return { content, loading }
}
