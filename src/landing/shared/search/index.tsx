import {Col, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";

export const Search = () => <Row className={"mt-4"}>
    <Col>
        <InputGroup>
            <FormControl
                placeholder="Enter a port, country or ferry company"
                aria-label="Search"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">Edit</InputGroup.Text>
        </InputGroup>
    </Col>
</Row>