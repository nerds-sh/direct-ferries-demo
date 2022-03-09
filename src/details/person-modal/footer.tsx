import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

export const Footer = ({ handleClose }: {handleClose: () => void}) => <Container>
  <Row>
    <Button variant={'warning'} onClick={handleClose}>
      Done
    </Button>
  </Row>
</Container>
