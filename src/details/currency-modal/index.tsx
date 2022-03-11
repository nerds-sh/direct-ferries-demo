import React from 'react'
import { useContext } from 'details/context'
import { Modal } from 'react-bootstrap'
import { Modal as ModalType } from 'details/types'
import { Header } from 'details/currency-modal/header'
import { Body } from 'details/currency-modal/body'
import { Footer } from 'details/currency-modal/footer'
import 'details/currency-modal/style.scss'

const handleClose = (setModal: (modal: ModalType) => void) => () => setModal(ModalType.None)

export const CurrencyModal = () => {
  const { modal, setModal } = useContext()

  return <Modal show={modal === ModalType.Currency} onHide={handleClose(setModal)} fullscreen>
    <Header />
    <Body />
    <Footer />
  </Modal>
}
