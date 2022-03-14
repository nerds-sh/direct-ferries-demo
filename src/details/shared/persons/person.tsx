import React from 'react'
import { Modal } from 'src/details/types'
import 'src/details/shared/persons/style.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { useOnItemClick, usePersonCount } from 'src/details/shared/persons/hooks'

const useContainerProps = (kind: Modal) => ({
  className: 'container',
  onClick: useOnItemClick(kind),
  role: 'button',
})

const iconUrl = 'https://static.directferries.co.uk/image/ico/light-blue/passengers.svg'

export const Person = ({ kind }: {kind: Modal}) => <Container {...useContainerProps(kind)}>
  <Row>
    <Col>
      <img alt={'icon'} className={'icon'} src={iconUrl} />
    </Col>
  </Row>
  <Row>
    <Col>{kind === Modal.Adults ? 'Adults' : 'Children'}</Col>
  </Row>
  <Row>
    <Col>{usePersonCount(kind)}</Col>
  </Row>
</Container>
