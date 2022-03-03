import React from 'react'
import { Col } from 'react-bootstrap'
import { Person } from 'details/shared/persons/person'
import { Wrapper } from 'details/shared/persons/wrapper'
import 'details/shared/persons/style.scss'
import { Modal } from 'details/types'

export const Persons = () => <Wrapper>
  <Col><Person kind={Modal.Adults} /></Col>
  <Col><Person kind={Modal.Children} /></Col>
</Wrapper>
