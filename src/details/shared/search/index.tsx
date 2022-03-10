import React from 'react'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useOnClick, useSearchValue } from 'details/shared/search/hooks'
import 'details/shared/search/style.scss'

export const Search = () => {
  const searchValue = useSearchValue()
  const onClick = useOnClick()

  return <Row className={'mt-4'}>
    <Col>
      <InputGroup>
        <FormControl placeholder={'Enter a port, country or ferry company'} className={'details-search'}
                     aria-label={'Search'}
                     aria-describedby={'basic-addon2'}
                     value={searchValue} onClick={onClick} name={'search'} readOnly />
      </InputGroup>
    </Col>
  </Row>
}
