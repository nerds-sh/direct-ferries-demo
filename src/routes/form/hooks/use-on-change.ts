import { useGetRoutes } from 'routes/hooks'
import { useCallback } from 'react'
import { useSearch } from 'routes/form/hooks/use-search'

export const useOnChange = () => {
  const { setSearch } = useSearch()
  const getRoutes = useGetRoutes()

  return useCallback(event => {
    setSearch(event.target.value)
    getRoutes(event.target.value)
  }, [setSearch, getRoutes])
}
