import { combineEpics } from 'redux-observable'
import { get } from 'routes/epics'

export const epic = combineEpics(get)
