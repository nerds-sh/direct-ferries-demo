import { createSlice } from '@reduxjs/toolkit'
import { SliceState, Reducer as CommonReducer } from 'common/types'

type State = SliceState<any, any, any>

type Reducer = CommonReducer<any, State>

const initialState: State = {
  input: '',
  data: '',
  errors: '',
}

const attempt: Reducer = (state, { payload }) => ({ ...state, input: payload })

const success: Reducer = (state, { payload }) => ({ ...state, data: payload })

const failure: Reducer = (state, { payload }) => ({ ...state, errors: payload })

export const get = createSlice({
  initialState,
  name: 'dealpicker/get',
  reducers: {
    attempt,
    success,
    failure,
  },
})

export const { actions: getting } = get
