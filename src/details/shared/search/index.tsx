import React from 'react'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useContext } from 'details/context'
import { useSearchValue } from 'details/shared/search/hooks'

export const Search = () => {
  const { handleChange } = useContext()
  const searchValue = useSearchValue()

  return <Row className={'mt-4'}>
    <Col>
      <InputGroup>
        <FormControl placeholder={'Enter a port, country or ferry company'}
                     aria-label={'Search'}
                     aria-describedby={'basic-addon2'}
                     value={searchValue} onChange={handleChange} name={'search'} />
        <InputGroup.Text id={'basic-addon2'}>Edit</InputGroup.Text>
      </InputGroup>
    </Col>
  </Row>
}
