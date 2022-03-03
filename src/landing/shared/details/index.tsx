import {Col, Row} from "react-bootstrap";
import React from "react";
import {Persons} from "landing/shared/persons";
import {Pets} from "landing/shared/pets";
import {Transportation} from "landing/shared/transportation";

export const Details = () => <React.Fragment>
    <Row className={"mt-2"}>
        <Col className={"text-white"}>Trip details</Col>
    </Row>
    <Row>
        <Col><Persons /></Col>
    </Row>
    <Row className={"mt-2"}>
        <Col><Pets /></Col>
    </Row>
    <Row className={"mt-2"}>
        <Col><Transportation /></Col>
    </Row>
</React.Fragment>