import React from 'react'
import { Search } from 'src/details/common/search'
import { Details } from 'src/details/common/details'
import { Dates } from 'src/details/return-trip/dates'
import { Currency } from 'src/details/common/currency'
import { DifferentReturn } from 'src/details/return-trip/different-return'

export const ReturnTrip = () => <>
  <Search />
  <Dates />
  <Details />
  <DifferentReturn />
  <Currency />
</>
