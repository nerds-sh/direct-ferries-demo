import { combineReducers } from '@reduxjs/toolkit'
import { reducer as dealfinder } from 'dealfinder'

export const reducer = combineReducers({ dealfinder })

export type State = ReturnType<typeof reducer>
