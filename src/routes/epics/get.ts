import { ofType } from 'redux-observable'
import { get as slice } from 'routes/slices'
import { repositories } from 'repositories'
import { mergeMap, catchError, of, Observable } from 'rxjs'
import { PayloadAction } from '@reduxjs/toolkit'
import { Types } from 'routes'

export const get = (actions$: Observable<any>) => actions$
  .pipe(ofType(slice.actions.attempt))
  .pipe(mergeMap(execute))

const execute = ({ payload }: PayloadAction<Types.Routes.Input>) => repositories.routes.get(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

const success = (payload: any) => of(slice.actions.success(payload))

const failure = (payload: any) => of(slice.actions.failure(payload))