import React, { useContext } from 'react'
import { UserContext } from "../../Contexts/UserContext";
import { Container, Row, Col, Table } from 'react-bootstrap';
export default function ResumenUserPage() {
    const { username, rol } = useContext(UserContext)
    return (
        <Container>
            <Row>
                <h1>Resumen del usuario</h1>
            </Row>
            <Row className = "mt-4 border" variant="dark">
                <Col >
                    <p>Username: <span> {username}</span></p>
                    <p>Rol: <span> {rol}</span></p>
                </Col>
            </Row>
            <Row>
                <Col>
                <h2>Eventos</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
                <Col>
                <h2>Premios</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    )
}
