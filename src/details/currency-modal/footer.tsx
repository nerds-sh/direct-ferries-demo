import { Button, Container, Modal, Row } from 'react-bootstrap'
import React from 'react'
import { Modal as ModalType } from 'details/types'
import { useContext } from 'details/context'

const handleClose = (setModal: (modal: ModalType) => void) => () => setModal(ModalType.None)

export const Footer = () => {
  const { setModal } = useContext()

  return <Modal.Footer className={'currency-modal-footer'}>
    <Container>
      <Row>
        <Button variant={'warning'} onClick={handleClose(setModal)}>
          Done
        </Button>
      </Row>
    </Container>
  </Modal.Footer>
}
