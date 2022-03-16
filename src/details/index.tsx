import React from 'react'
import { Form } from 'src/details/form'
import { Modal } from 'src/details/types'
import { Modals } from 'src/details/modals'
import 'src/details/common/currency/style.scss'
import { Context, useValue } from 'src/details/context'

export const Details = () => <Context.Provider value={useValue()}>
  <Modals.Passengers kind={Modal.Children} />
  <Modals.Passengers kind={Modal.Adults} />
  <Modals.Currency />
  <Form />
</Context.Provider>
