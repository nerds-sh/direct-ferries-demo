import React from 'react'
import * as Bootstrap from 'react-bootstrap'
import { useRedirectUrl } from 'src/details/shared/submit/hooks'

const useButtonProperties = (): Bootstrap.ButtonProps => ({
  type: 'submit',
  variant: 'warning',
  size: 'lg',
  href: useRedirectUrl(),
  target: '_top',
  className: 'w-100',
})

export const Submit = () => <Bootstrap.Button {...useButtonProperties()}>
  Search
</Bootstrap.Button>

