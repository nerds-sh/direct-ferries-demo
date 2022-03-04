import React from 'react'
import { useContext } from 'details/context'
import {Button, Container, Modal, Row} from 'react-bootstrap'
import { Modal as ModalType } from 'details/types'
import 'details/person-modal/style.scss'
import {Adults} from "details/person-modal/adults";
import {Children} from "details/person-modal/children";

export const PersonModal = ({ kind }: {kind: ModalType}) => {
  const { modal, setModal } = useContext()
  const handleClose = () => setModal(ModalType.None)

  return <Modal show={modal === kind} onHide={handleClose} fullscreen={true}>
    <Modal.Header className={"personModalHeader"} closeButton>
      <Modal.Title>Total Passengers & Ages</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Adults />
      <Children />
    </Modal.Body>
    <Modal.Footer className={'personModalFooter'}>
      <Container>
        <Row>
      <Button variant={'warning'} onClick={handleClose}>
        Done
      </Button>
        </Row>
      </Container>
    </Modal.Footer>
  </Modal>
}
