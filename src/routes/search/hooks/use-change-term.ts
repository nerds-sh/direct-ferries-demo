import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useChangeTerm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_search, setSearch] = useSearchParams()

  return useCallback((term: string) => {
    setSearch({ term })
  }, [setSearch])
}
