import { combineEpics } from 'redux-observable'
import { get } from 'dealpicker/epics'

export const epic = combineEpics(get)
