import { get, base } from 'src/deals/slices'
import { combineReducers } from '@reduxjs/toolkit'

export const reducer = combineReducers({
  get: get.reducer,
  base: base.reducer,
})
