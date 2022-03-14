import React from 'react'
import { Form } from 'src/details/form'
import { Modal } from 'src/details/types'
import 'src/details/shared/currency/style.scss'
import { PersonModal } from 'src/details/person-modal'
import { CurrencyModal } from 'src/details/currency-modal'
import { Context, useDefaultContext } from 'src/details/context'

export const Details = () => <Context.Provider value={useDefaultContext()}>
  <PersonModal kind={Modal.Children} />
  <PersonModal kind={Modal.Adults} />
  <CurrencyModal />
  <Form />
</Context.Provider>
