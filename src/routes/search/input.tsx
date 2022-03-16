import React from 'react'
import * as Bootstrap from 'react-bootstrap'
import * as hooks from 'src/routes/search/hooks'

const useInputProperties = () => ({
  'aria-label': 'search',
  'aria-describedby': 'basic-addon2',
  className: 'routes-search',
  placeholder: 'enter a port, country or ferry company',
  value: hooks.useSearchTerm(),
  ref: hooks.useInitializeRef(),
  onChange: hooks.useFilterRoutes(),
})

export const Input = () => {
  hooks.useSelectOnMount()

  return <Bootstrap.InputGroup className={'mt-4'}>
    <Bootstrap.FormControl {...useInputProperties()} />
  </Bootstrap.InputGroup>
}
