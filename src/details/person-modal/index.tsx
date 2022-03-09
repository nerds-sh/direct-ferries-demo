import React from 'react'
import { useContext } from 'details/context'
import { Modal } from 'react-bootstrap'
import { Modal as ModalType } from 'details/types'
import 'details/person-modal/style.scss'
import { Adults } from 'details/person-modal/adults'
import { Children } from 'details/person-modal/children'
import { Footer } from 'details/person-modal/footer'

const handleClose = (setModal: (modal: ModalType) => void) => () => setModal(ModalType.None)

export const PersonModal = ({ kind }: {kind: ModalType}) => {
  const { modal, setModal } = useContext()

  return <Modal show={modal === kind} onHide={handleClose(setModal)} fullscreen>
    <Modal.Header className={'personModalHeader'} closeButton>
      <Modal.Title>Total Passengers & Ages</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Adults />
      <Children />
    </Modal.Body>
    <Modal.Footer className={'personModalFooter'}>
      <Footer handleClose={handleClose(setModal)} />
    </Modal.Footer>
  </Modal>
}
