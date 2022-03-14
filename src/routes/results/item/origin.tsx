import React from 'react'
import { Routes } from 'src/routes/types'
import { Container, Row } from 'react-bootstrap'

export const Origin = ({ item }: {item: Routes.Item}) => <Container>
  <Row>{item.portFrom}</Row>
  <Row>{item.locationsFrom}</Row>
</Container>

