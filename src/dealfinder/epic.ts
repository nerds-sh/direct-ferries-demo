import { combineEpics } from 'redux-observable'
import { get, base } from 'dealfinder/epics'

export const epic = combineEpics(get, base)
