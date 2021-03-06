import React from 'react'
import { useContext } from 'src/details/context'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'

export const Adults = () => {
  const { values, errors, handleChange } = useContext()

  return <Row className={'mt-4'}>
    <Col>
      <InputGroup>
        <InputGroup.Text id={'basic-addon2'}>Adults (18+)</InputGroup.Text>
        <FormControl type={'number'} className={'total-passengers__adults'}
                     value={values.adults} name={'adults'} onChange={handleChange} />
      </InputGroup>
      {errors.adults && <div className={'person-modal-error'}>{errors.adults}</div>}
    </Col>
  </Row>
}
