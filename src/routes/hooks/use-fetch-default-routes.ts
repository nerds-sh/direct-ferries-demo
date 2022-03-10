import { useEffect } from 'react'
import { useGetRoutes } from 'routes/hooks/use-get-routes'

export const useFetchDefaultRoutes = () => {
  const getRoutes = useGetRoutes()

  useEffect(() => {
    getRoutes('')
  }, [getRoutes])
}
