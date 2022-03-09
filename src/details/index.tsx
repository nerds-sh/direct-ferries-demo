import React from 'react'
import { Context, useDefaultContext } from 'details/context'
import { Form } from 'details/form'
import { PersonModal } from 'details/person-modal'
import { Modal } from 'details/types'
import 'details/shared/currency/style.scss'

const params = {
  'stdc': 'DF10COM',
  'grid': '0',
  'rfid': '97',
  'psgr': '2',
  'curr': '9',
  'retn': 'true',
  'rfidr': '98',
  'outd': '2022-04-25',
  'outt': '9',
  'retd': '2022-04-26',
  'rett': '17',
}

const getBookingRedirectUrl = () => {
  const query = new URLSearchParams(params).toString()
  return `https://ssl.directferries.com/ferry/secure/booking_redirect_df.aspx?${query}`
}

export const Details = () => <Context.Provider value={useDefaultContext()}>
  <PersonModal kind={Modal.Children} />
  <PersonModal kind={Modal.Adults} />
  <Form />
  <a href={getBookingRedirectUrl()}>Redirect</a>
</Context.Provider>
