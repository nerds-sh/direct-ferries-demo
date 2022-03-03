import React from 'react'
import 'landing/shared/date/style.scss'
import {Col, Container, Row} from "react-bootstrap";

export const Date = () => <Container className={"dateContainer"}>
    <Row>
        <Col>Date</Col>
    </Row>
    <Row>
        <Col>Time</Col>
    </Row>
</Container>
