import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarApp from "./Components/Navbar/NavbarApp";
import FooterLogin from "./Components/Footer/Footer.login";

import { getRol, getAuth, getUsername } from "./Helper/helper";

import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router/Router";
import React from "react";

//trayendo el contexto de autenticación
import { UserContext } from "./Contexts/UserContext"

import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.iniciarSesionContext = (newAuth, newRol, newUsername) => {
      console.log(`ha ingresado ${newUsername} con rol ${newRol}`)
      this.setState({
        auth: newAuth,
        rol: newRol,
        username: newUsername,
        previewUser: false,
      })
    }
    this.cerrarSesionContext = () => {
      this.setState({
        auth: false,
        rol: "NONE",
        username: "",
        previewUser: false,
      });
      cookies.remove("_s");
      cookies.remove("rol");
      cookies.remove("username");

      console.log("sesion cerrada");
      window.location.reload();
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
    }

    this.state = {
      auth: getAuth(),
      rol: getRol(),
      username: getUsername(),
      iniciarSesionContext: this.iniciarSesionContext,
      cerrarSesionContext: this.cerrarSesionContext,
      verComoUsuarioContext: this.verComoUsuarioContext
    };
    this.verComoUsuarioContext= () =>{
      this.setState({
        previewUser: !this.state.previewUser
      })
    }
  }

  componentDidMount() {
    console.log("app montado")
    console.log(getAuth())
    console.log(getUsername())
    this.state = {
      auth: getAuth(),
      rol: getRol(),
      username: getUsername(),
      iniciarSesionContext: this.iniciarSesionContext,
      cerrarSesionContext: this.cerrarSesionContext
    }
  }
  componentDidUpdate() {
    console.log("actualizado app");
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <Router>
          <UserContext.Provider value={this.state}>
            <NavbarApp />
            <AppRouter rol = {this.state.rol}/>
            <FooterLogin></FooterLogin>
          </UserContext.Provider>
        </Router>
      </div>
    );
  }
}
export default App;