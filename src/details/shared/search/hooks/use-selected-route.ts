import { useLocation } from 'react-router-dom'
import { useRoutes } from 'routes/hooks'
import { Routes } from 'routes/types'

type MatchInput = {
  id: number,
  routes: Routes.Item[]
}

const idsMatch = (id: number) => ({ routeId }: Routes.Item) => id === routeId

const matchRoute = ({ id, routes }: MatchInput) => routes.find(idsMatch(id))

export const useSelectedRoute = () => {
  const { search } = useLocation()
  const routes = useRoutes()
  const routeId = new URLSearchParams(search).get('routeId')

  return routeId && matchRoute({ id: parseInt(routeId), routes })
}
