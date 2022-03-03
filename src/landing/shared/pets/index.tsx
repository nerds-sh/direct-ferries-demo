import React from 'react'
import 'landing/shared/pets/style.scss'
import {Col, Container, Row} from "react-bootstrap";

export const Pets = () => <Container className={"petsContainer pt-2 pb-2"}>
    <Row>
        <Col>Icon</Col>
        <Col>0</Col>
        <Col>Pets</Col>
        <Col>Edit</Col>
    </Row>
</Container>
