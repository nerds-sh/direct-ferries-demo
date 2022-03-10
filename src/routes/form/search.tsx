import React, { useRef } from 'react'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useOnChange, useSearch, useSelectOnMount } from 'routes/form/hooks'

export const Search = () => {
  const { search } = useSearch()
  const ref = useRef<HTMLInputElement>()
  useSelectOnMount(ref)

  return <Row className={'mt-4'}>
    <Col>
      <InputGroup>
        <FormControl placeholder={'Enter a port, country or ferry company'} className={'routes-search'}
                     aria-label={'Search'} value={search} ref={(inputRef: any) => { ref.current = inputRef }}
                     aria-describedby={'basic-addon2'} onChange={useOnChange()} />
      </InputGroup>
    </Col>
  </Row>
}
