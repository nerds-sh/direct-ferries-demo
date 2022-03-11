import React from 'react'
import { useContext } from 'details/context'
import { Form } from 'react-bootstrap'
import { Currency } from 'details/types'

type Props = {
  option: {value: Currency, label: string}
}

export const Option = ({ option }: Props) => {
  const { values, handleChange } = useContext()

  return <Form.Check name={'currency'} onChange={handleChange} checked={`${option.value}` === `${values.currency}`}
                     type={'radio'} label={option.label} value={option.value} />
}
