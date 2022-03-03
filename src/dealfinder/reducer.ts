import { combineReducers } from '@reduxjs/toolkit'
import { get, base } from 'dealfinder/slices'

export const reducer = combineReducers({
  get: get.reducer,
  base: base.reducer,
})
