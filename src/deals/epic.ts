import { combineEpics } from 'redux-observable'
import { get, base } from 'src/deals/epics'

export const epic = combineEpics(get, base)
