import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'routes/results/item/style.scss'
import { Origin } from 'routes/results/item/origin'
import { Destination } from 'routes/results/item/destination'

export const Item = () => <Container className={'itemContainer'}>
  <Row className={'mt-2 p-2'}>
    <Col>
      <Origin />
    </Col>
    <Col>
      Icon
    </Col>
    <Col>
      <Destination />
    </Col>
  </Row>
</Container>
