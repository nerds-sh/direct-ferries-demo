import { useCallback } from 'react'
import { Routes } from 'src/routes/types'
import { useNavigate } from 'react-router-dom'

const makeParams = ({ routeId, routeIdRet }: Routes.Item) => ({
  routeId: `${routeId}`,
  routeIdRet: `${routeIdRet}`,
})

export const useNavigateToDetails = (item: Routes.Item) => {
  const navigate = useNavigate()

  return useCallback(() => {
    const search = new URLSearchParams(makeParams(item)).toString()

    navigate({ pathname: '/details', search })
  }, [item, navigate])
}
