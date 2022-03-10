import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'routes/results/item/style.scss'
import { Origin } from 'routes/results/item/origin'
import { Destination } from 'routes/results/item/destination'
import { useOnClick } from 'routes/results/item/hooks'
import { Routes } from 'routes/types'

type Props = {item: Routes.Item}

export const Item = ({ item }: Props) => <Container className={'container'} onClick={useOnClick(item)}>
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
