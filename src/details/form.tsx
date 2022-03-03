import React from 'react'
import { Submit } from 'details/shared/submit'
import { Type } from 'details/shared/type'
import { ReturnTrip } from 'details/return-trip'
import { OneWay } from 'details/one-way'

const formType = 2

export const Form = () => <>
  <Type />
  {formType === 1 ? <ReturnTrip /> : <OneWay /> }
  <Submit />
</>
