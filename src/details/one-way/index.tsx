import React from 'react'
import { Dates } from 'src/details/one-way/dates'
import { Search } from 'src/details/shared/search'
import { Details } from 'src/details/shared/details'
import { Currency } from 'src/details/shared/currency'

export const OneWay = () => <>
  <Search />
  <Dates />
  <Details />
  <Currency />
</>
