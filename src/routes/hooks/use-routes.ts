import { get } from "lodash"
import { useSelector } from "react-redux"
import { Route } from "../types"

const path = 'routes.list.data'

export const useRoutes = (): [Route] => useSelector(state => get(state, path, []))