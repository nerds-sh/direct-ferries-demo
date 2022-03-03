import { ofType } from 'redux-observable'
import { getting } from 'dealpicker/slices'
import { repositories } from 'repositories'
import { mergeMap, catchError, of } from 'rxjs'

export const get = (actions$: any) => actions$
  .pipe(ofType(getting.attempt))
  .pipe(mergeMap(execute))

const execute = () => repositories.dealpicker.get()
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

const success = (payload: any) => of(getting.success(payload))

const failure = (payload: any) => of(getting.failure(payload))
