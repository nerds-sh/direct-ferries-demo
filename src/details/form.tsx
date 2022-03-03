import React from 'react'
import { Submit } from 'details/shared/submit'
import { Type } from 'details/shared/type'
import { ReturnTrip } from 'details/return-trip'
import { OneWay } from 'details/one-way'
import { useContext } from 'details/context'
import { Form as Forms } from 'details/types'

export const Form = () => {
  const { type, handleSubmit } = useContext()

  return <form onSubmit={handleSubmit}>
    <Type />
    {type === Forms.Return ? <ReturnTrip /> : <OneWay />}
    <Submit />
  </form>
}
