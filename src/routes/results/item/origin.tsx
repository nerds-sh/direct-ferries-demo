import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Routes } from 'routes/types'

export const Origin = ({ item }: {item: Routes.Item}) => <Container>
  <Row>{item.portFrom}</Row>
  <Row>{item.locationsFrom}</Row>
</Container>

