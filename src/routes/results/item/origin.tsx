import React from 'react'
import { Routes } from 'src/routes/types'

export const Origin = ({ item }: {item: Routes.Item}) => <div className={'d-flex flex-column w-100'}>
  <div>{item.portFrom}</div>
  <div>{item.locationsFrom}</div>
</div>

