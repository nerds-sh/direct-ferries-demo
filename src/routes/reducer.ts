import { get } from 'src/routes/slices'
import { combineReducers } from '@reduxjs/toolkit'

export const reducer = combineReducers({ get: get.reducer })
