import { useSelectedRoute } from 'details/shared/search/hooks/use-selected-route'
import { useContext } from 'details/context'

export const useSearchValue = () => {
  const selectedRoute = useSelectedRoute()
  const { values: { search } } = useContext()

  return selectedRoute ? selectedRoute.routeName : search
}
