import { useEffect } from 'react'
import { useGetRoutes } from 'routes/hooks/use-get-routes'
import { useSearch } from 'routes/form/hooks'

export const useFetchDefaultRoutes = () => {
  const { search } = useSearch()
  const getRoutes = useGetRoutes()

  useEffect(() => {
    getRoutes(search)
  }, [getRoutes, search])
}
