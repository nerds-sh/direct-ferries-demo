import { Types } from 'common'
import { Default } from 'routes/types'
import { createSlice } from '@reduxjs/toolkit'

type State = Types.SliceState<Default.Input, any, any>

type Reducer = Types.Reducer<any, State>

const initialState: State = {
  input: {
    SearchTerm: '',
    AB_SAYT_ports: '',
    OtherPortSearchStr: '',
    legType: '',
    cult: '',
    AB_user_iso_pop_route: '',
    userIso: '',
    stdc: '',
    opname: '',
    country: '',
    port_from: '',
    port_to: '',
    baseData: '',
    callback: '',
  },
  data: '',
  errors: '',
}

const attempt: Reducer = (state, { payload }) => ({ ...state, input: payload })

const success: Reducer = (state, { payload }) => ({ ...state, data: payload })

const failure: Reducer = (state, { payload }) => ({ ...state, errors: payload })

export const defaultRoutes = createSlice({
  initialState,
  name: 'routes/default',
  reducers: {
    attempt,
    success,
    failure,
  },
})
