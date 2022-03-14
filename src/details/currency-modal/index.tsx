import React from 'react'
import { Modal } from 'react-bootstrap'
import 'src/details/currency-modal/style.scss'
import { useContext } from 'src/details/context'
import { Body } from 'src/details/currency-modal/body'
import { Modal as ModalType } from 'src/details/types'
import { Header } from 'src/details/currency-modal/header'
import { Footer } from 'src/details/currency-modal/footer'

const handleClose = (setModal: (modal: ModalType) => void) => () => setModal(ModalType.None)

export const CurrencyModal = () => {
  const { modal, setModal } = useContext()

  return <Modal show={modal === ModalType.Currency} onHide={handleClose(setModal)} fullscreen>
    <Header />
    <Body />
    <Footer />
  </Modal>
}
