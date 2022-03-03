import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import 'routes/results/item/style.scss'

export const Item = () => <Container className={"itemContainer"}>
    <Row className={'mt-2 p-2'}>
    <Col>
        <Container>
            <Row>Port</Row>
            <Row>Country</Row>
        </Container>
    </Col>
    <Col>
        Icon
    </Col>
    <Col>
        <Container>
            <Row>Port</Row>
            <Row>Country</Row>
        </Container>
    </Col>
</Row>
</Container>
