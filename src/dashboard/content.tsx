import React from 'react'
import { Base } from 'dashboard/base'
import { Get } from 'dashboard/get'

export const Content = () => <div className={'dashboard'}>
  <div className={'dashboard-content'}>
    <p>I am meant to represent a mighty dashboard</p>
    <Base />
    <Get />
  </div>
</div>
