import { combineEpics } from 'redux-observable'
import { epic as dealpicker } from 'dealpicker'

export const epic = combineEpics(dealpicker)
