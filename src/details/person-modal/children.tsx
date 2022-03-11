import React from 'react'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useContext } from 'details/context'

export const Children = () => {
  const { values, handleChange } = useContext()

  return <Row className={'mt-4'}>
    <Col>
      <InputGroup>
        <InputGroup.Text id={'basic-addon2'}>Children (0-17)</InputGroup.Text>
        <FormControl aria-label={'Search'}
                     type={'number'}
                     value={values.children} name={'children'} onChange={handleChange} />
      </InputGroup>
    </Col>
  </Row>
}
