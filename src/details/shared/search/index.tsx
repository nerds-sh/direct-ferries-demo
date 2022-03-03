import React from 'react'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useContext } from 'details/context'

export const Search = () => {
  const { values, handleChange } = useContext()

  return <Row className={'mt-4'}>
    <Col>
      <InputGroup>
        <FormControl placeholder={'Enter a port, country or ferry company'}
                     aria-label={'Search'}
                     aria-describedby={'basic-addon2'}
                     value={values.search} onChange={handleChange} name={'search'} />
        <InputGroup.Text id={'basic-addon2'}>Edit</InputGroup.Text>
      </InputGroup>
    </Col>
  </Row>
}
