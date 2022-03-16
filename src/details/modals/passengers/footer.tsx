import React from 'react'
import * as Bootstrap from 'react-bootstrap'
import { useCloseDisabled } from 'src/details/modals/passengers/hooks'

type Props = {
  handleClose: () => void,
}

const useButtonProps = ({ handleClose }: any) => ({
  variant: 'warning',
  onClick: handleClose,
  disabled: useCloseDisabled(),
  className: 'total-passengers__done',
})

export const Footer = ({ handleClose }: Props) => <Bootstrap.Container>
  <Bootstrap.Row>
    <Bootstrap.Button {...useButtonProps({ handleClose })}>
      Done
    </Bootstrap.Button>
  </Bootstrap.Row>
</Bootstrap.Container>
