import * as core from 'core'
import { useContext } from 'details/context'

export const useSearchValue = () => {
  const selectedRoute = core.hooks.useSelectedRoute()
  const { values: { search } } = useContext()

  return selectedRoute ? selectedRoute.routeName : search
}
