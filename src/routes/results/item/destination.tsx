import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Routes } from 'routes/types'

export const Destination = ({ item }: {item: Routes.Item}) => <Container>
  <Row>{item.portTo}</Row>
  <Row>{item.locationsTo}</Row>
</Container>
