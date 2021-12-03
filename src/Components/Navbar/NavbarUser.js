import React from 'react'
import { useHistory } from "react-router-dom";
import {
  Container,
  NavDropdown,
  Nav,
  Navbar,
  Image
} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom';

import { UserContext } from '../../Contexts/UserContext';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Logo from "../../Assets/images/logo.png"

export default function NavbarUser() {
  let history = useHistory()
  return (
    <Navbar fixed="top" bg="light" expand="lg" className = "d-flex justify-content-around">
      <Container>
      <Navbar.Brand><Link to="/"><Image width={100}  src = {Logo} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item> <Link to="/"> Inicio </Link></Nav.Item>
            <Nav.Item ><Link to="/eventos"> Eventos </Link></Nav.Item>
            <Nav.Item ><Link to="/premios"> Premios </Link></Nav.Item>
            <NavDropdown title="Qué hacer" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Cómo redimir
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tu acumulado
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tus redenciones
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Reglamento
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">El equipo</Nav.Link>
          </Nav>

          <UserContext.Consumer>
            {
              ({ username, cerrarSesionContext }) => (
                <ButtonGroup
                  variant="text"
                  color="secondary"
                  aria-label="text secondary button group"
                >
                  <Button className ="text-dark" startIcon={<AccountCircleIcon/>} 
                    onClick = {(event)=>{history.push("/resumen")}}
                  >{username}</Button>
                  <Button onClick={cerrarSesionContext}>Salir</Button>
                </ButtonGroup>
              )
            }
          </UserContext.Consumer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
