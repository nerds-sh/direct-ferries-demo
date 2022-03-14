import { reducer as routes } from 'src/routes'
import { combineReducers } from '@reduxjs/toolkit'
import { reducer as deals } from 'src/deals'

export const reducer = combineReducers({ deals, routes })

export type State = ReturnType<typeof reducer>
