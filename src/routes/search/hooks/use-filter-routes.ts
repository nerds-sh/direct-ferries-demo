import { useCallback } from 'react'
import { useGetRoutes } from 'src/routes/hooks'
import { useChangeTerm } from 'src/routes/search/hooks/use-change-term'

export const useFilterRoutes = () => {
  const changeTerm = useChangeTerm()
  const getRoutes = useGetRoutes()

  return useCallback(event => {
    changeTerm(event.target.value)
    getRoutes(event.target.value)
  }, [changeTerm, getRoutes])
}
