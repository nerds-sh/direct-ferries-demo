import * as core from 'src/core'
import { Routes } from 'src/routes/types'
import { createSlice } from '@reduxjs/toolkit'

type State = core.types.SliceState<Routes.Input, Routes.Item[], any>

type Reducer = core.types.Reducer<any, State>

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
  data: [],
  errors: '',
}

const attempt: Reducer = (state, { payload }) => ({ ...state, input: payload })

const success: Reducer = (state, { payload }) => ({ ...state, data: payload })

const failure: Reducer = (state, { payload }) => ({ ...state, errors: payload })

export const get = createSlice({
  initialState,
  name: 'routes/get',
  reducers: {
    attempt,
    success,
    failure,
  },
})
