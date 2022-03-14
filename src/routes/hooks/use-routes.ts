import { get } from 'lodash'
import { Routes } from 'src/routes/types'
import { useSelector } from 'react-redux'

const path = 'routes.get.data'

export const useRoutes = () => useSelector(state => get(state, path, []) as Routes.Item[])
