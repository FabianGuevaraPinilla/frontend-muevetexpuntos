import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import "./Footer.login.scss";

export default function FooterLogin() {
    return (
        <div>
            <Container variant="light">
                <Row className="d-flex justify-content-center">
                    Mision TIC 2022 - Ciclo 4
                </Row>
                <Row className="d-flex justify-content-center">
                    2021
                </Row>
            </Container>
        </div>
    )
}
