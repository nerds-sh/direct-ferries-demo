import { get } from 'lodash'
import { Form } from 'src/details/types'
import React, { ChangeEvent } from 'react'
import { useContext } from 'src/details/context'
import { ButtonGroup, ToggleButton, ToggleButtonProps } from 'react-bootstrap'

type Props = ToggleButtonProps

const radios = [
  { name: 'Return Trip', value: Form.Return },
  { name: 'One Way', value: Form.OneWay },
]

const buttonProps = ({ idx, radio, type, setType }: any):Props => ({
  id: `radio-${idx}`,
  type: 'radio',
  variant: 'secondary',
  name: 'radio',
  value: radio.value,
  checked: type === radio.value,
  onChange: (event: ChangeEvent) => setType(parseInt(get(event, 'target.value', Form.Return))),
})

export const Type = () => {
  const { type, setType } = useContext()

  return (<ButtonGroup className={'d-flex'}>
    {radios.map((radio, idx) => (
      <ToggleButton key={idx} {...buttonProps({ idx, radio, type, setType })}>
        {radio.name}
      </ToggleButton>
    ))}
  </ButtonGroup>)
}
