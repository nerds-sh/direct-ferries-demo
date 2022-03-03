import { createSlice } from '@reduxjs/toolkit'
import { Types } from 'common'

type State = Types.SliceState<any, any, any>

type Reducer = Types.Reducer<any, State>

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
