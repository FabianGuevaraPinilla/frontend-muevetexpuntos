import React from 'react'

import {
  Container,
  //   NavDropdown, 
  //   Nav,
  Navbar, Image
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Logo from "../../Assets/images/logo.png"
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import { Link } from 'react-router-dom';
export default function NavbarLogin() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container  className = "d-flex justify-content-around">
        <Navbar.Brand><Link to="/"><Image width={100} src={Logo} /> </Link></Navbar.Brand>
      </Container>
    </Navbar>
  )
}