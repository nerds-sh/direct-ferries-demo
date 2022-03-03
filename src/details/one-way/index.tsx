import { Search } from 'details/shared/search'
import React from 'react'
import { Details } from 'details/shared/details'
import { Currency } from 'details/shared/currency'
import { Dates } from 'details/one-way/dates'

export const OneWay = () => <>
  <Search />
  <Dates />
  <Details />
  <Currency />
</>
