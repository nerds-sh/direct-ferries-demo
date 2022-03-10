import { combineReducers } from '@reduxjs/toolkit'
import { reducer as dealfinder } from 'dealfinder'
import { reducer as routes } from 'routes'

export const reducer = combineReducers({ dealfinder, routes })

export type State = ReturnType<typeof reducer>
