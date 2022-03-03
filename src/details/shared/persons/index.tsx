import React from 'react'
import { Col } from 'react-bootstrap'
import { Person } from 'details/shared/persons/person'
import { Wrapper } from 'details/shared/persons/wrapper'
import 'details/shared/persons/style.scss'

export const Persons = () => <Wrapper>
  <Col><Person /></Col>
  <Col><Person /></Col>
</Wrapper>
