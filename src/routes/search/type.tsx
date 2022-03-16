import React from 'react'
import * as Bootstrap from 'react-bootstrap'
import { Toggle } from 'src/routes/search/toggle'

const radios = [
  { name: 'Return Trip', value: '1' },
  { name: 'One Way', value: '2' },
]

export const Type = () => <Bootstrap.ButtonGroup className={'d-flex'}>
  {radios.map((radio, index) => <Toggle key={index} radio={radio} index={index} />)}
</Bootstrap.ButtonGroup>
