import React from 'react'
import 'details/shared/persons/style.scss'
import { Col, Container, Row } from 'react-bootstrap'

export const Person = () => <Container className={'personContainer'}>
  <Row>
    <Col>Icon</Col>
  </Row>
  <Row>
    <Col>Adults</Col>
  </Row>
  <Row>
    <Col>2</Col>
  </Row>
</Container>
