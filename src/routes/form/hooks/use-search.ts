import * as core from 'core'
import { useSearchParams } from 'react-router-dom'

export const useSearch = () => {
  const [search, setSearch] = useSearchParams()
  const selectedRoute = core.hooks.useSelectedRoute()
  const existingSearch = selectedRoute ? selectedRoute.routeName : search.get('term')

  return {
    search: existingSearch || '',
    setSearch: (term: string) => setSearch({ term }),
  }
}
