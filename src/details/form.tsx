import React from 'react'
import { OneWay } from 'src/details/one-way'
import { Type } from 'src/details/shared/type'
import { useContext } from 'src/details/context'
import { Form as Forms } from 'src/details/types'
import { Submit } from 'src/details/shared/submit'
import { ReturnTrip } from 'src/details/return-trip'

export const Form = () => {
  const { type, handleSubmit } = useContext()

  return <form onSubmit={handleSubmit}>
    <Type />
    {type === Forms.Return ? <ReturnTrip /> : <OneWay />}
    <Submit />
  </form>
}
