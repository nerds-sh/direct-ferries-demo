import { get } from 'src/routes/epics'
import { combineEpics } from 'redux-observable'

export const epic = combineEpics(get)
