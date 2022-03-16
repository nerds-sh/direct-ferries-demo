import React from 'react'
import { Search } from 'src/details/common/search'
import { Details } from 'src/details/common/details'
import { Dates } from 'src/details/two-way/dates'
import { Currency } from 'src/details/common/currency'
import { DifferentReturn } from 'src/details/two-way/different-return'

export const TwoWay = () => <>
  <Search />
  <Dates />
  <Details />
  <DifferentReturn />
  <Currency />
</>
