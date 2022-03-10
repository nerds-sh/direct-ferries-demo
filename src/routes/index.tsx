import React from 'react'
import 'details/shared/currency/style.scss'
import { Form } from 'routes/form'
import { Results } from 'routes/results'

const params = {
  SearchTerm: '', // initial call without any searchterm but making another calls when typing the search term
  AB_SAYT_ports: 'false',
  OtherPortSearchStr: '',
  legType: '1',
  cult: 'en-US',
  AB_user_iso_pop_route: 'False',
  userIso: 'RO',
  stdc: 'DF10COM',
  opname: '',
  country: '',
  port_from: '',
  port_to: '',
  baseData: '',
  callback: '',
}

const getDefaultRoutes = () => {
  const query = new URLSearchParams(params).toString()

  // this has to be a POST with query in body as it is
  return `https://ssl.directferries.com/ferry/ws/dealpicker.asmx/SearchDataGetAB?${query}`
}

export const Routes = () => <>
  <Form />
  <Results />
  <a href={getDefaultRoutes()}>Get default routes</a>
</>

export * from 'routes/reducer'
export * as Types from 'routes/types'
export * from 'routes/epic'
