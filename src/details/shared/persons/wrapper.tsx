import React from 'react'
import { Types } from 'common'
import { Col, Row } from 'react-bootstrap'

export const Wrapper = ({ children }: {children: Types.Children}) => <Row>
  <Col>
    <Row>
      {children}
    </Row>
  </Col>
</Row>
