import { combineEpics } from 'redux-observable'
import { epic as dealfinder } from 'dealfinder'
import { epic as routes } from 'routes'

export const epic = combineEpics(dealfinder, routes)
