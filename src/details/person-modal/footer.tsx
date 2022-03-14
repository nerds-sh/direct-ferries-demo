import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useCloseDisabled } from 'src/details/person-modal/hooks'

type Props = {
  handleClose: () => void,
}

export const Footer = ({ handleClose }: Props) => <Container>
  <Row>
    <Button variant={'warning'} onClick={handleClose} disabled={useCloseDisabled()}>
      Done
    </Button>
  </Row>
</Container>
