import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useRedirectUrl } from 'details/shared/submit/hooks'

export const Submit = () => <Row className={'mt-4'}>
  <Col className={'d-grid'}>
    <Button type={'submit'} variant={'warning'} size={'lg'} href={useRedirectUrl()} target={'_top'}>
      Search
    </Button>
  </Col>
</Row>
