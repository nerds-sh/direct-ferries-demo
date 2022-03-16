import React from 'react'
import * as Bootstrap from 'react-bootstrap'
import 'src/details/shared/search/style.scss'
import { useOnClick, useSearchValue } from 'src/details/shared/search/hooks'

export const Search = () => {
  const searchValue = useSearchValue()
  const onClick = useOnClick()

  return <Bootstrap.InputGroup className={'mt-4'}>
    <Bootstrap.FormControl placeholder={'Enter a port, country or ferry company'} className={'details-search'}
                           aria-label={'Search'}
                           aria-describedby={'basic-addon2'}
                           value={searchValue} onClick={onClick} name={'search'} readOnly />
  </Bootstrap.InputGroup>
}
