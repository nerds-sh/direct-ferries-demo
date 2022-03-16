import React from 'react'
import { get } from 'lodash'
import { Modal } from 'src/details/types'
import { useContext } from 'src/details/context'
import { currencies } from 'src/details/common/currencies'

const getLabel = ({ currency }: any) => {
  const current = currencies.find(({ value }) => `${currency}` === `${value}`)

  return get(current, 'label', '$ (USD)')
}

export const Currency = () => {
  const { setModal, values } = useContext()

  const onClick = () => setModal(Modal.Currency)

  return <div className={`m-3`}>
    <button className={'w-100 bg-white rounded p-2 border-0'} onClick={onClick}>
      Currency:
      {' '}
      <strong>{getLabel(values)}</strong>
    </button>
  </div>
}
