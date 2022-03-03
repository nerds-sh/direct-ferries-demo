import React, {useState} from 'react'
import {ButtonGroup, ToggleButton} from "react-bootstrap";

export const Type = () => {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Return Trip', value: '1' },
        { name: 'One Way', value: '2' },
    ];

    return (<ButtonGroup className={"d-flex"}>
        {radios.map((radio, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
                {radio.name}
            </ToggleButton>
        ))}
    </ButtonGroup>)
}
