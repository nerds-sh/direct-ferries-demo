import React from 'react'
import { Form } from 'src/routes/form'
import { Results } from 'src/routes/results'
import 'src/details/shared/currency/style.scss'
import { Behaviour } from 'src/routes/behaviour'

export const Routes = () => <>
  <Behaviour />
  <Form />
  <Results />
</>

export * from 'src/routes/reducer'
export * as Types from 'src/routes/types'
export * from 'src/routes/epic'
