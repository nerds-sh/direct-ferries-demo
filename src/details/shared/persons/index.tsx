import React from 'react'
import { Col } from 'react-bootstrap'
import { Modal } from 'src/details/types'
import 'src/details/shared/persons/style.scss'
import { Person } from 'src/details/shared/persons/person'
import { Wrapper } from 'src/details/shared/persons/wrapper'

export const Persons = () => <Wrapper>
  <Col><Person kind={Modal.Adults} /></Col>
  <Col><Person kind={Modal.Children} /></Col>
</Wrapper>
