import { useSelector } from 'react-redux'
import { get } from 'lodash'

const path = 'dealpicker.base.data'

export const useResponse = () => useSelector(state => get(state, path, {}))
