import React from 'react'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'

export const Children = () => <Row className={'mt-4'}>
  <Col>
    <InputGroup>
      <InputGroup.Text id={'basic-addon2'}>Children (0-17)</InputGroup.Text>
      <FormControl placeholder={'Enter a port, country or ferry company'}
                   aria-label={'Search'}
                   type={'number'}
                   aria-describedby={'basic-addon2'}
                   value={'0'} name={'search'} />
    </InputGroup>
  </Col>
</Row>
