import React from 'react'
import { Search } from 'src/routes/search'
import * as Bootstrap from 'react-bootstrap'
import * as hooks from 'src/routes/search/hooks'

type Props = { index: number, radio: { name: string, value: string }, }

const useButtonProperties = ({ index, radio }: Props): Bootstrap.ToggleButtonProps => ({
  id: `radio-${index}`,
  type: 'radio',
  variant: 'secondary',
  name: 'radio',
  value: radio.value,
  checked: Search.useContext().routeType === radio.value,
  onChange: hooks.useChangeRouteType(),
})

export const Toggle = ({ index, radio }: Props) => (
  <Bootstrap.ToggleButton {...useButtonProperties({ index, radio })}>
    {radio.name}
  </Bootstrap.ToggleButton>
)
