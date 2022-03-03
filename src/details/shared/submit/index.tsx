import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const Submit = () => <Row className={'mt-4'}>
  <Col className={'d-grid'}>
    <Button type={'submit'} variant={'warning'} size={'lg'}>
      Search
    </Button>
  </Col>
</Row>
