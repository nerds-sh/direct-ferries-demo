import React from 'react'
import { Date } from 'src/details/common/date'
import { Space } from 'src/details/one-way/space'
import { Search } from 'src/details/common/search'
import { Details } from 'src/details/common/details'
import { Currency } from 'src/details/common/currency'

export const OneWay = () => <>
  <Search />
  <Date className={'mt-2'} />
  <Details />
  <Space />
  <Currency />
</>
