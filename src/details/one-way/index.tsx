import React from 'react'
import { Date } from 'src/details/shared/date'
import { Space } from 'src/details/one-way/space'
import { Search } from 'src/details/shared/search'
import { Details } from 'src/details/shared/details'
import { Currency } from 'src/details/shared/currency'

export const OneWay = () => <>
  <Search />
  <Date className={'mt-2'} />
  <Details />
  <Space />
  <Currency />
</>
