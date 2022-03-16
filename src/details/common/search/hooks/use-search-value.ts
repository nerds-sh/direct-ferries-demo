import * as core from 'src/core'
import { useContext } from 'src/details/context'

export const useSearchValue = () => {
  const selectedRoute = core.hooks.useSelectedRoute()
  const { values: { search } } = useContext()

  return selectedRoute ? selectedRoute.routeName : search
}
