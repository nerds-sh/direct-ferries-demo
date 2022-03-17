import { get } from "lodash"
import { useSelector } from "react-redux"

const path = 'users.list.data'

export const useUsers = (): any => useSelector(state => get(state, path, []))