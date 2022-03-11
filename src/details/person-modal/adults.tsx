import React from 'react'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useContext } from 'details/context'

export const Adults = () => {
  const { values, handleChange } = useContext()

  return <Row className={'mt-4'}>
    <Col>
      <InputGroup>
        <InputGroup.Text id={'basic-addon2'}>Adults (18+)</InputGroup.Text>
        <FormControl type={'number'}
                     value={values.adults} name={'adults'} onChange={handleChange} />
      </InputGroup>
    </Col>
  </Row>
}
