import React from 'react'
import { Context, useDefaultContext } from 'details/context'
import { Form } from 'details/form'
import { PersonModal } from 'details/person-modal'
import { Modal } from 'details/types'
import 'details/shared/currency/style.scss'
import { CurrencyModal } from 'details/currency-modal'

const params = {
  stdc: 'DF10COM',
  grid: '0',
  rfid: '97',
  psgr: '2', // from form - sum of adults and children
  curr: '9', // from form - currency USD=9, EUR=2, GBP=1
  retn: 'false', // from form - return trip or one way
  rfidr: '98',
  outd: '2022-04-25',
  outt: '9',
  retd: '2022-04-26', // null for one way trip
  rett: '17', // -1 for one way trip
}

const getBookingRedirectUrl = () => {
  const query = new URLSearchParams(params).toString()
  const url = `https://ssl.directferries.com/ferry/secure/booking_redirect_df.aspx?${query}`

  return url
}

export const Details = () => <Context.Provider value={useDefaultContext()}>
  <PersonModal kind={Modal.Children} />
  <PersonModal kind={Modal.Adults} />
  <CurrencyModal />
  <Form />
  <a href={getBookingRedirectUrl()} target={'_top'}>Redirect</a>
</Context.Provider>
