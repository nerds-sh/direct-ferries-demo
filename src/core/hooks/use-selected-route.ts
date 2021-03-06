import { parseInt } from 'lodash'
import { Routes } from 'src/routes/types'
import { useRoutes } from 'src/routes/hooks'
import { useLocation } from 'react-router-dom'

type Ids = {
  outgoingId: number,
  returnId: number,
}

type MatchInput = {
  routes: Routes.Item[]
} & Ids

const idsMatch = (ids: Ids) => (route: Routes.Item) => {
  const outgoingMatch = ids.outgoingId === route.routeId
  const returnMatch = ids.returnId === route.routeIdRet

  return outgoingMatch && returnMatch
}

const matchRoute = ({ routes, ...ids }: MatchInput) => routes.find(idsMatch(ids))

export const useSelectedRoute = () => {
  const { search } = useLocation()
  const routes = useRoutes()
  const outgoingId = new URLSearchParams(search).get('routeId')
  const returnId = new URLSearchParams(search).get('routeIdRet')

  if (outgoingId && returnId) {
    return matchRoute({ outgoingId: parseInt(outgoingId), returnId: parseInt(returnId), routes })
  }
}
