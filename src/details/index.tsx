import React from 'react'
import { Context, useDefaultContext } from 'details/context'
import { Form } from 'details/form'
import 'details/shared/currency/style.scss'

export const Details = () => <Context.Provider value={useDefaultContext()}>
  <Form />
</Context.Provider>
