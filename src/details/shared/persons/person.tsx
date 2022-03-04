import React from 'react'
import 'details/shared/persons/style.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { Modal } from 'details/types'
import { useOnItemClick } from 'details/shared/persons/hooks'

const useContainerProps = (kind: Modal) => ({
  className: 'personContainer',
  onClick: useOnItemClick(kind),
})

export const Person = ({ kind }: {kind: Modal}) => <Container {...useContainerProps(kind)}>
  <Row>
    <Col>
      <img className={"personIcon"} src={"https://static.directferries.co.uk/image/ico/light-blue/passengers.svg"} />
    </Col>
  </Row>
  <Row>
    <Col>{kind === Modal.Adults ? 'Adults' : 'Children'}</Col>
  </Row>
  <Row>
    <Col>2</Col>
  </Row>
</Container>
