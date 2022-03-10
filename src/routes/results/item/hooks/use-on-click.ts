import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { Routes } from 'routes/types'

export const useOnClick = (item: Routes.Item) => {
  const navigate = useNavigate()

  return useCallback(() => {
    navigate({ pathname: '/details', search: `routeId=${item.routeId}` })
  }, [item.routeId, navigate])
}
