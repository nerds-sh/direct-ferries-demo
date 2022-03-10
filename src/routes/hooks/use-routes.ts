import { useSelector } from 'react-redux'
import { get } from 'lodash'
import { Routes } from 'routes/types'

const path = 'routes.get.data'

export const useRoutes = () => useSelector(state => get(state, path, []) as Routes.Item[])
