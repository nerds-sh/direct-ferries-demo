import React from 'react'
import { useContext } from 'src/details/context'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'

export const Children = () => {
  const { values, errors, handleChange } = useContext()

  return <Row className={'mt-4'}>
    <Col>
      <InputGroup>
        <InputGroup.Text id={'basic-addon2'}>Children (0-17)</InputGroup.Text>
        <FormControl aria-label={'Search'}
                     type={'number'}
                     value={values.children} name={'children'} onChange={handleChange} />
      </InputGroup>
      {errors.children && <div className={'person-modal-error'}>{errors.children}</div>}
    </Col>
  </Row>
}
