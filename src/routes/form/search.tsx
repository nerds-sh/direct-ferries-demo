import React from 'react'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'

export const Search = () => <Row className={'mt-4'}>
  <Col>
    <InputGroup>
      <FormControl placeholder={'Enter a port, country or ferry company'}
                   aria-label={'Search'}
                   aria-describedby={'basic-addon2'} />
    </InputGroup>
  </Col>
</Row>
