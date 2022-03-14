import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Pets } from 'src/details/shared/pets'
import { Persons } from 'src/details/shared/persons'
import { Title } from 'src/details/shared/details/title'
import { Transportation } from 'src/details/shared/transportation'

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
