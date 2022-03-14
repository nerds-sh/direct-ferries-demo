import { reducer as routes } from 'src/routes'
import { combineReducers } from '@reduxjs/toolkit'
import { reducer as dealfinder } from 'src/dealfinder'

export const reducer = combineReducers({ dealfinder, routes })

export type State = ReturnType<typeof reducer>
