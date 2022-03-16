import React from 'react'
import { Modal } from 'src/details/types'
import 'src/details/common/persons/style.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { useOnItemClick, usePersonCount } from 'src/details/common/persons/hooks'

type Props = { kind: Modal, className?: string }

const useContainerProps = (props: Props) => ({
  className: `container route-details__adults-button ${props.className}`,
  onClick: useOnItemClick(props.kind),
  role: 'button',
})

const iconUrl = 'https://static.directferries.co.uk/image/ico/light-blue/passengers.svg'

export const Person = (props: Props) => <Container {...useContainerProps(props)}>
  <Row>
    <Col>
      <img alt={'icon'} className={'icon'} src={iconUrl} />
    </Col>
  </Row>
  <Row>
    <Col>{props.kind === Modal.Adults ? 'Adults' : 'Children'}</Col>
  </Row>
  <Row>
    <Col>{usePersonCount(props.kind)}</Col>
  </Row>
</Container>

Person.defaultProps = { className: '' }
