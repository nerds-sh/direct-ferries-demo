import { useGetRoutes } from 'routes/hooks'
import { useCallback } from 'react'

export const useOnChange = () => {
  const getRoutes = useGetRoutes()

  return useCallback(event => {
    getRoutes(event.target.value)
  }, [getRoutes])
}
