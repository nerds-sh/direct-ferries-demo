import React from 'react'
import { get } from 'dealpicker/hooks'

export const Get = () => <div className={'dashboard-response'}>
  <p>{JSON.stringify(get.useResponse())}</p>
</div>