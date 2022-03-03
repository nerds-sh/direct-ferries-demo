import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Persons } from 'details/shared/persons'
import { Pets } from 'details/shared/pets'
import { Transportation } from 'details/shared/transportation'
import { Title } from 'details/shared/details/title'

export const Details = () => <>
  <Title />
  <Persons />
  <Row className={'mt-2'}>
    <Col><Pets /></Col>
  </Row>
  <Row className={'mt-2'}>
    <Col><Transportation /></Col>
  </Row>
</>
