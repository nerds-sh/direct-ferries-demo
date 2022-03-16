import React from 'react'
import { useContext } from 'src/details/context'
import { Modal as ModalType } from 'src/details/types'
import { Button, Container, Modal, Row } from 'react-bootstrap'

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
