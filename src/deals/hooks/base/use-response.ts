import { get } from 'lodash'
import { useSelector } from 'react-redux'

const path = 'deals.base.data'

export const useResponse = () => useSelector(state => get(state, path, {}))
