import { combineReducers } from '@reduxjs/toolkit'
import { reducer as dealpicker } from 'dealpicker'

export const reducer = combineReducers({ dealpicker })

export type State = ReturnType<typeof reducer>
