import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { routes } from "src/routes/slices"
import { Route } from "src/routes/types"

export const useAddRoute = () => {
    const dispatch = useDispatch()

    return useCallback((route: Route) => {
        dispatch(routes.actions.add(route))
    }, [dispatch])
}