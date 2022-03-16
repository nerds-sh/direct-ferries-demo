import * as core from 'src/core'
import { useSearchParams } from 'react-router-dom'

export const useSearchTerm = (): string => {
  const [search] = useSearchParams()
  const selectedRoute = core.hooks.useSelectedRoute()
  const existingSearch = selectedRoute ? selectedRoute.routeName : search.get('term')

  return existingSearch || ''
}
