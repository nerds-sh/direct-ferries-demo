import * as core from 'src/core'
import { createSlice } from '@reduxjs/toolkit'

type State = core.types.SliceState<any, any, any>

type Reducer = core.types.Reducer<any, State>

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
  name: 'deals/get',
  reducers: {
    attempt,
    success,
    failure,
  },
})
