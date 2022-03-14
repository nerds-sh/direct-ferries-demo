import React from 'react'
import { Search } from 'src/details/shared/search'
import { Details } from 'src/details/shared/details'
import { Dates } from 'src/details/return-trip/dates'
import { Currency } from 'src/details/shared/currency'
import { DifferentReturn } from 'src/details/return-trip/different-return'

export const ReturnTrip = () => <>
  <Search />
  <Dates />
  <Details />
  <DifferentReturn />
  <Currency />
</>
