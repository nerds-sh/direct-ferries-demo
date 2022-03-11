import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { Routes } from 'routes/types'

const makeParams = ({ routeId, routeIdRet }: Routes.Item) => ({
  routeId: `${routeId}`,
  routeIdRet: `${routeIdRet}`,
})

export const useOnClick = (item: Routes.Item) => {
  const navigate = useNavigate()

  return useCallback(() => {
    const search = new URLSearchParams(makeParams(item)).toString()

    navigate({ pathname: '/details', search })
  }, [item, navigate])
}
