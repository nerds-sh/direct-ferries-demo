import React from 'react'
import { Routes } from 'src/routes/types'

export const Destination = ({ item }: {item: Routes.Item}) => <div className={'d-flex flex-column w-100'}>
  <div className={'text-end'}>{item.portTo}</div>
  <div className={'text-end'}>{item.locationsTo}</div>
</div>
