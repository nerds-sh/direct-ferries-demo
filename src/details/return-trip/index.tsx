import { Search } from 'details/shared/search'
import React from 'react'
import { Details } from 'details/shared/details'
import { DifferentReturn } from 'details/return-trip/different-return'
import { Currency } from 'details/shared/currency'
import { Dates } from 'details/return-trip/dates'

export const ReturnTrip = () => <>
  <Search />
  <Dates />
  <Details />
  <DifferentReturn />
  <Currency />
</>
