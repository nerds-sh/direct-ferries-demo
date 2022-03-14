import { useEffect } from 'react'
import { useSearch } from 'src/routes/form/hooks'
import { useGetRoutes } from 'src/routes/hooks/use-get-routes'

export const useFetchDefaultRoutes = () => {
  const { search } = useSearch()
  const getRoutes = useGetRoutes()

  useEffect(() => {
    getRoutes(search)
  }, [getRoutes, search])
}
