import { epic as deals } from 'src/deals'
import { epic as routes } from 'src/routes'
import { combineEpics } from 'redux-observable'

export const epic = combineEpics(deals, routes)
