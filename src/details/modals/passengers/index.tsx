import React from 'react'
import { Modal } from 'react-bootstrap'
import { useContext } from 'src/details/context'
import 'src/details/modals/passengers/style.scss'
import { Modal as ModalType } from 'src/details/types'
import { Footer } from 'src/details/modals/passengers/footer'
import { Adults } from 'src/details/modals/passengers/adults'
import { Children } from 'src/details/modals/passengers/children'

const handleClose = (setModal: (modal: ModalType) => void) => () => setModal(ModalType.None)

const makeId = (kind: ModalType) => `${kind === ModalType.Children ? 'children' : 'adults'}-modal`

export const Passengers = ({ kind }: {kind: ModalType}) => {
  const { modal, setModal } = useContext()

  return <Modal name={makeId(kind)} show={modal === kind} onHide={handleClose(setModal)} fullscreen>
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
