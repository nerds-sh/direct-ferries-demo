import { ofType } from 'redux-observable'
import { base as slice } from 'dealpicker/slices'
import { repositories } from 'repositories'
import { mergeMap, catchError, of, Observable } from 'rxjs'
import { PayloadAction } from '@reduxjs/toolkit'
import { Types } from 'dealpicker'

export const base = (actions$: Observable<any>) => actions$
  .pipe(ofType(slice.actions.attempt))
  .pipe(mergeMap(execute))

const execute = ({ payload }: PayloadAction<Types.Base.Input>) => repositories.dealpicker.base(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

const success = (payload: any) => of(slice.actions.success(payload))

const failure = (payload: any) => of(slice.actions.failure(payload))
