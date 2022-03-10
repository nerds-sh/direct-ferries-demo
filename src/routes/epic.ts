import { combineEpics } from 'redux-observable'
import { defaultRoutes } from 'routes/epics'

export const epic = combineEpics(defaultRoutes)
