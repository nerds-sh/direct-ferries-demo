import React, { ChangeEvent, useState } from 'react'
import { ButtonGroup, ToggleButton, ToggleButtonProps } from 'react-bootstrap'
import { get } from 'lodash'

type Props = ToggleButtonProps

const radios = [
    { name: 'Return Trip', value: '1' },
    { name: 'One Way', value: '2' },
]

const buttonProps = ({ idx, radio, radioValue, setRadioValue }: any):Props => ({
    id: `radio-${idx}`,
    type: 'radio',
    variant: 'secondary',
    name: 'radio',
    value: radio.value,
    checked: radioValue === radio.value,
    onChange: (event: ChangeEvent) => setRadioValue(get(event, 'currentTarget.value', '')),
})

export const Type = () => {
    const [radioValue, setRadioValue] = useState('1')

    return (<ButtonGroup className={'d-flex'}>
        {radios.map((radio, idx) => (
            <ToggleButton key={idx} {...buttonProps({ idx, radio, radioValue, setRadioValue })}>
                {radio.name}
            </ToggleButton>
        ))}
    </ButtonGroup>)
}
