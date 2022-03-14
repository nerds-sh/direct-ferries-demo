import React from 'react'
import { Routes } from 'src/routes/types'
import 'src/routes/results/item/style.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { Origin } from 'src/routes/results/item/origin'
import { useOnClick } from 'src/routes/results/item/hooks'
import { Destination } from 'src/routes/results/item/destination'

type Props = {item: Routes.Item}

export const Item = ({ item }: Props) => <Container role={'button'} className={'container'} onClick={useOnClick(item)}>
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
