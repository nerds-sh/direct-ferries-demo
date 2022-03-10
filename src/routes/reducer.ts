import { combineReducers } from '@reduxjs/toolkit'
import { get } from 'routes/slices'

export const reducer = combineReducers({ get: get.reducer })
