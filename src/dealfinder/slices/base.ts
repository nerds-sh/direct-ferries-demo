import * as core from 'src/core'
import { Base } from 'src/dealfinder/types'
import { createSlice } from '@reduxjs/toolkit'

type State = core.types.SliceState<Base.Input, any, any>

type Reducer = core.types.Reducer<any, State>

const initialState: State = {
  input: { stdc: '' },
  data: '',
  errors: '',
}

const attempt: Reducer = (state, { payload }) => ({ ...state, input: payload })

const success: Reducer = (state, { payload }) => ({ ...state, data: payload })

const failure: Reducer = (state, { payload }) => ({ ...state, errors: payload })

export const base = createSlice({
  initialState,
  name: 'dealfinder/base',
  reducers: {
    attempt,
    success,
    failure,
  },
})
