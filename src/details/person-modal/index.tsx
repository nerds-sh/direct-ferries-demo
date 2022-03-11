import React from 'react'
import { useContext } from 'details/context'
import { Modal } from 'react-bootstrap'
import { Modal as ModalType } from 'details/types'
import { Adults } from 'details/person-modal/adults'
import { Children } from 'details/person-modal/children'
import { Footer } from 'details/person-modal/footer'
import 'details/person-modal/style.scss'

const handleClose = (setModal: (modal: ModalType) => void) => () => setModal(ModalType.None)

export const PersonModal = ({ kind }: {kind: ModalType}) => {
  const { modal, setModal } = useContext()

  return <Modal show={modal === kind} onHide={handleClose(setModal)} fullscreen>
    <Modal.Header className={'person-modal-header'} closeButton>
      <Modal.Title>Total Passengers & Ages</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Adults />
      <Children />
    </Modal.Body>
    <Modal.Footer className={'person-modal-footer'}>
      <Footer handleClose={handleClose(setModal)} />
    </Modal.Footer>
  </Modal>
}
