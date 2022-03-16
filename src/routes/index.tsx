import React from 'react'
import { Search } from 'src/routes/search'
import { Results } from 'src/routes/results'
import 'src/details/common/currency/style.scss'
import { Behaviour } from 'src/routes/behaviour'

export const Routes = () => <>
  <Behaviour />
  <Search />
  <Results />
</>

export * from 'src/routes/reducer'
export * as Types from 'src/routes/types'
export * from 'src/routes/epic'
