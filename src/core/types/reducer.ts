import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { SliceState } from 'core/types/slice-state'

export type Reducer<Action, State extends SliceState<any, any, any>> = CaseReducer<State, PayloadAction<Action>>
