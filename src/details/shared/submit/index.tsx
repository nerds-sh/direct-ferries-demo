import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const Submit = () => <Row className={'mt-4'}>
  <Col className={'d-grid'}>
    <Button variant={'warning'} size={'lg'}>Submit</Button>
  </Col>
</Row>
