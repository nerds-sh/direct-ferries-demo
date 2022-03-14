import { SliceState } from 'core/types/slice-state'
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

export type Reducer<Action, State extends SliceState<any, any, any>> = CaseReducer<State, PayloadAction<Action>>
