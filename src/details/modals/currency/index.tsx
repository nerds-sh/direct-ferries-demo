import React from 'react'
import { Modal } from 'react-bootstrap'
import 'src/details/modals/currency/style.scss'
import { useContext } from 'src/details/context'
import { Body } from 'src/details/modals/currency/body'
import { Modal as ModalType } from 'src/details/types'
import { Header } from 'src/details/modals/currency/header'
import { Footer } from 'src/details/modals/currency/footer'

const handleClose = (setModal: (modal: ModalType) => void) => () => setModal(ModalType.None)

export const Currency = () => {
  const { modal, setModal } = useContext()

  return <Modal show={modal === ModalType.Currency} onHide={handleClose(setModal)} fullscreen>
    <Header />
    <Body />
    <Footer />
  </Modal>
}
