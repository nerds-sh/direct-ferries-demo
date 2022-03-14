import React from 'react'
import * as core from 'core'
import { Col, Row } from 'react-bootstrap'

type Props = { children: core.types.Children }

export const Wrapper = ({ children }: Props) => <Row>
  <Col>
    <Row>
      {children}
    </Row>
  </Col>
</Row>
