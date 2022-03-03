import { ofType } from 'redux-observable'
import { getting } from 'dealpicker/slices'
import { repositories } from 'repositories'
import { mergeMap, catchError, of, Observable } from 'rxjs'
import { PayloadAction } from '@reduxjs/toolkit'

export const get = (actions$: Observable<any>) => actions$
  .pipe(ofType(getting.attempt))
  .pipe(mergeMap(execute))

const execute = ({ payload }: PayloadAction<object>) => repositories.dealpicker.get(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

const success = (payload: any) => of(getting.success(payload))

const failure = (payload: any) => of(getting.failure(payload))
