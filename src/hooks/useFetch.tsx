import { useEffect, useState } from 'react'

export function useFetch (url: string, dependencie?: any): { data: any, error: null, loading: boolean } {
  const [data, setData] = useState<any>([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    void (
      async function () {
        try {
          setLoading(true)
          const response = await fetch(url)
          const data = await response.json()
          setData(data)
        } catch (error: any) {
          setError(error)
        }
        setLoading(false)
      }
    )()
  }, [url, dependencie])

  return { data, error, loading }
}
