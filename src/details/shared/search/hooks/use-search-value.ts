import { useSelectedRoute } from 'common/hooks'
import { useContext } from 'details/context'

export const useSearchValue = () => {
  const selectedRoute = useSelectedRoute()
  const { values: { search } } = useContext()

  return selectedRoute ? selectedRoute.routeName : search
}
