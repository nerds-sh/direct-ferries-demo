import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'routes/results/item/style.scss'
import { Origin } from 'routes/results/item/origin'
import { Destination } from 'routes/results/item/destination'
import { useOnClick } from 'routes/results/item/hooks'
import { Routes } from 'routes/types'

export const Item = ({ item }: {item: Routes.Item}) => <Container className={'container'} onClick={useOnClick()}>
  <Row className={'mt-2 p-2'}>
    <Col>
      <Origin item={item} />
    </Col>
    <Col>
      Icon
    </Col>
    <Col>
      <Destination item={item} />
    </Col>
  </Row>
</Container>
