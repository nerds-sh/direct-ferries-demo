import React from 'react'
import { OneWay } from 'src/details/one-way'
import { TwoWay } from 'src/details/two-way'
import { Type } from 'src/details/common/type'
import { useContext } from 'src/details/context'
import { Form as Forms } from 'src/details/types'
import { Submit } from 'src/details/common/submit'

export const Form = () => {
  const { type, handleSubmit } = useContext()

  return <form onSubmit={handleSubmit}>
    <Type />
    {type === Forms.Return ? <TwoWay /> : <OneWay />}
    <Submit />
  </form>
}
