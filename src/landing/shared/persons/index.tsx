import React from 'react'
import 'landing/shared/persons/style.scss'
import {Col, Row} from "react-bootstrap";
import {Person} from "landing/shared/persons/person";

export const Persons = () => <Row>
    <Col><Person /></Col>
    <Col><Person /></Col>
</Row>
