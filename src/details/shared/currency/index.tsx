import React from 'react'
import { Modal } from 'src/details/types'
import { Col, Row } from 'react-bootstrap'
import { currencies } from 'src/details/common'
import 'src/details/shared/currency/style.scss'
import { useContext } from 'src/details/context'
import { get } from 'lodash'

const getLabel = ({ currency }: any) => {
  const current = currencies.find(({ value }) => `${currency}` === `${value}`)

  return get(current, 'label', '$ (USD)')
}

export const Currency = () => {
  const { setModal, values } = useContext()

  const onClick = () => setModal(Modal.Currency)

  return <Row className={'mt-2'}>
    <Col>
      <div className={'container p-1'} role={'button'} onClick={onClick}>
        Currency:
        {' '}
        {getLabel(values)}
      </div>
    </Col>
  </Row>
}
