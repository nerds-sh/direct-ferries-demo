import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'routes/results/item/style.scss'
import { Origin } from 'routes/results/item/origin'
import { Destination } from 'routes/results/item/destination'
import { useOnClick } from 'routes/results/item/hooks'

export const Item = () => <Container className={'container'} onClick={useOnClick()}>
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
