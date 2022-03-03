import React from 'react'
import { base } from 'dealpicker/hooks'

export const Base = () => <div className={'dashboard-response'}>
  <p>{JSON.stringify(base.useResponse())}</p>
</div>
