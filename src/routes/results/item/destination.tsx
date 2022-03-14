import React from 'react'
import { Routes } from 'src/routes/types'
import { Container, Row } from 'react-bootstrap'

export const Destination = ({ item }: {item: Routes.Item}) => <Container>
  <Row>{item.portTo}</Row>
  <Row>{item.locationsTo}</Row>
</Container>
