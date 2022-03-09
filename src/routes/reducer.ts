import { combineReducers } from '@reduxjs/toolkit'
import { defaultRoutes } from 'routes/slices/default-routes'

export const reducer = combineReducers({ defaultRoutes: defaultRoutes.reducer })
