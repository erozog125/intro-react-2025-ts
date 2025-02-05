import { useEffect, useState } from 'react'

type Data<T> = T | null
type ErrorType = string | null

interface Params<T> {
  data: Data<T>
  loading: boolean
  error: ErrorType
}

export const useFetch = <T,>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<ErrorType>(null)

  useEffect(() => {

   const controller = new AbortController()
    
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data: T = await response.json()
        setData(data)
        setError(null)
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {  // Ignora errores de abort
          setError((err as Error).message);
        }
      } finally {
        setLoading(false)
      }
    }

    setTimeout(() => {fetchData()}, 4000)

    return () => {    
      controller.abort()
    }

  }, [url])

  return { data, loading, error }
}


