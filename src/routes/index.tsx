import React from 'react'
import 'details/shared/currency/style.scss'
import { Form } from 'routes/form'
import { Results } from 'routes/results'
import { Behaviour } from 'routes/behaviour'

export const Routes = () => <>
  <Behaviour />
  <Form />
  <Results />
</>

export * from 'routes/reducer'
export * as Types from 'routes/types'
export * from 'routes/epic'
