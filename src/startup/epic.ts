import { epic as routes } from 'src/routes'
import { combineEpics } from 'redux-observable'
import { epic as dealfinder } from 'src/dealfinder'

export const epic = combineEpics(dealfinder, routes)
