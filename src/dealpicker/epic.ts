import { combineEpics } from 'redux-observable'
import { get, base } from 'dealpicker/epics'

export const epic = combineEpics(get, base)
