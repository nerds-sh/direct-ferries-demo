import { Types } from 'src/dealfinder'
import { ofType } from 'redux-observable'
import { repositories } from 'src/repositories'
import { PayloadAction } from '@reduxjs/toolkit'
import { base as slice } from 'src/dealfinder/slices'
import { mergeMap, catchError, of, Observable } from 'rxjs'

export const base = (actions$: Observable<any>) => actions$
  .pipe(ofType(slice.actions.attempt))
  .pipe(mergeMap(execute))

const execute = ({ payload }: PayloadAction<Types.Base.Input>) => repositories.dealfinder.base(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

const success = (payload: any) => of(slice.actions.success(payload))

const failure = (payload: any) => of(slice.actions.failure(payload))
