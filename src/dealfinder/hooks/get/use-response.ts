import { useSelector } from 'react-redux'
import { get } from 'lodash'

const path = 'dealfinder.get.data'

export const useResponse = () => useSelector(state => get(state, path, {}))
