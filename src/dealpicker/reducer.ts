import { combineReducers } from '@reduxjs/toolkit'
import { get } from 'dealpicker/slices'

export const reducer = combineReducers({ get: get.reducer })
