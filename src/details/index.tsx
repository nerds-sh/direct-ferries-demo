import React from 'react'
import { Context, useDefaultContext } from 'details/context'
import { Form } from 'details/form'
import { PersonModal } from 'details/person-modal'
import { Modal } from 'details/types'
import 'details/shared/currency/style.scss'

export const Details = () => <Context.Provider value={useDefaultContext()}>
  <PersonModal kind={Modal.Children} />
  <PersonModal kind={Modal.Adults} />
  <Form />
</Context.Provider>
