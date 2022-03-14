import { combineEpics } from 'redux-observable'
import { get, base } from 'src/dealfinder/epics'

export const epic = combineEpics(get, base)
