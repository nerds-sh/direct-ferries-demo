import React from 'react'
import { useContext } from 'details/context'
import { Button, Modal } from 'react-bootstrap'
import { Modal as ModalType } from 'details/types'

export const PersonModal = ({ kind }: {kind: ModalType}) => {
  const { modal, setModal } = useContext()
  const handleClose = () => setModal(ModalType.None)

  return <Modal show={modal === kind} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant={'secondary'} onClick={handleClose}>
        Close
      </Button>
      <Button variant={'primary'} onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
}
