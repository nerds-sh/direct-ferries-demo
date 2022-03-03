import { combineEpics } from 'redux-observable'
import { epic as dealfinder } from 'dealfinder'

export const epic = combineEpics(dealfinder)
