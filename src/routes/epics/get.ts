import { Types } from 'src/routes'
import { ofType } from 'redux-observable'
import { repositories } from 'src/repositories'
import { get as slice } from 'src/routes/slices'
import { PayloadAction } from '@reduxjs/toolkit'
import { mergeMap, catchError, of, Observable } from 'rxjs'

export const get = (actions$: Observable<any>) => actions$
  .pipe(ofType(slice.actions.attempt))
  .pipe(mergeMap(execute))

const execute = ({ payload }: PayloadAction<Types.Routes.Input>) => repositories.routes.get(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

const success = (payload: any) => of(slice.actions.success(payload))

const failure = (payload: any) => of(slice.actions.failure(payload))
