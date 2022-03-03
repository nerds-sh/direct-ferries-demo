import React from 'react'
import { useResponse } from 'dashboard/hooks'

export const Content = () => <div className={'dashboard'}>
  <div className={'dashboard-content'}>
    <p>I am meant to represent a mighty dashboard</p>
    <div className={'dashboard-response'}>
      <p>{JSON.stringify(useResponse())}</p>
    </div>
  </div>
</div>
