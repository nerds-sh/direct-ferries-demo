import React from 'react'
import { Submit } from 'details/shared/submit'
import { Type } from 'details/shared/type'
import { ReturnTrip } from 'details/return-trip'
import { OneWay } from 'details/one-way'
import { useContext } from 'details/context'
import { Types } from 'details/types'

export const Form = () => {
  const { type } = useContext()

  return <>
    <Type />
    {type === Types.Form.Return ? <ReturnTrip /> : <OneWay />}
    <Submit />
  </>
}
