import React, { ChangeEvent } from 'react'
import { ButtonGroup, ToggleButton, ToggleButtonProps } from 'react-bootstrap'
import { get } from 'lodash'
import { useContext } from 'details/context'
import { Types } from 'details/types'

type Props = ToggleButtonProps

const radios = [
  { name: 'Return Trip', value: Types.Form.Return },
  { name: 'One Way', value: Types.Form.OneWay },
]

const buttonProps = ({ idx, radio, type, setType }: any):Props => ({
  id: `radio-${idx}`,
  type: 'radio',
  variant: 'secondary',
  name: 'radio',
  value: radio.value,
  checked: type === radio.value,
  onChange: (event: ChangeEvent) => setType(parseInt(get(event, 'target.value', Types.Form.Return))),
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
