import { combineReducers } from '@reduxjs/toolkit'
import { defaultRoutes } from 'routes/slices'

export const reducer = combineReducers({ defaultRoutes: defaultRoutes.reducer })
