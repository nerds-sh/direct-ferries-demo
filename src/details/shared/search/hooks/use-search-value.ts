import { useContext } from 'details/context'
import { useSelectedRoute } from 'core/hooks'

export const useSearchValue = () => {
  const selectedRoute = useSelectedRoute()
  const { values: { search } } = useContext()

  return selectedRoute ? selectedRoute.routeName : search
}
