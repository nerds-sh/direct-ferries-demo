import { useCallback } from 'react'
import { useGetRoutes } from 'src/routes/hooks'
import { useSearch } from 'src/routes/form/hooks/use-search'

export const useOnChange = () => {
  const { setSearch } = useSearch()
  const getRoutes = useGetRoutes()

  return useCallback(event => {
    setSearch(event.target.value)
    getRoutes(event.target.value)
  }, [setSearch, getRoutes])
}
