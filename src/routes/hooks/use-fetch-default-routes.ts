import { useEffect } from 'react'
import { useSearchTerm } from 'src/routes/search/hooks'
import { useGetRoutes } from 'src/routes/hooks/use-get-routes'

export const useFetchDefaultRoutes = () => {
  const searchTerm = useSearchTerm()
  const getRoutes = useGetRoutes()

  useEffect(() => {
    getRoutes(searchTerm)
  }, [getRoutes, searchTerm])
}
