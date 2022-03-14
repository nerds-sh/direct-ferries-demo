import { useSelectedRoute } from 'core/hooks'
import { useSearchParams } from 'react-router-dom'

export const useSearch = () => {
  const [search, setSearch] = useSearchParams()
  const selectedRoute = useSelectedRoute()
  const existingSearch = selectedRoute ? selectedRoute.routeName : search.get('term')

  return {
    search: existingSearch || '',
    setSearch: (term: string) => setSearch({ term }),
  }
}
