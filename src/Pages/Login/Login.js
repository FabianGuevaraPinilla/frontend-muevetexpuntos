import React from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./Login.css";
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calculaExpiracionSesion } from "../../Helper/helper";
import Loading from "../../Components/Loading/Loading";
import { HOST } from "../../config";
import { UserContext } from "../../Contexts/UserContext";
const cookies = new Cookies();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }
  iniciarSesion(iniciarSesionContext) {
    this.setState({ loading: true });
    console.log("se va a loguear");
    axios
      .post(`${HOST}/usuarios/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert("Usuario y/o contraseña invalido");
        } else {
          // ha sido logueado correctamente
          console.log(response.data)
          // se crean los cookies
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calculaExpiracionSesion(),
          });
          cookies.set("rol", response.data.rol, {
            path: "/",
            expires: calculaExpiracionSesion(),
          })
          cookies.set("username", response.data.usuario, {
            path: "/",
            expires: calculaExpiracionSesion(),
          })
          iniciarSesionContext(
            true,
            response.data.rol,
            response.data.usuario
          )
          //redirigir al home O dashboard segun el 
          if (response.data.rol === "USER") {
            this.props.history.push("/home")
          } else if (response.data.rol === "ADMIN") {
            this.props.history.push("/admin/main")
          }
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <Container id="login-container">
        <Loading show={this.state.loading} />
        <Row>
          <Col>
            <Row className = "d-flex justify-content-center">
              <h2 className = "text-center">Iniciar sesión</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({ usuario: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => this.setState({ pass: e.target.value })}
                    />
                  </Form.Group>
                  <UserContext.Consumer>
                    {
                      ({ iniciarSesionContext }) => (<Button
                        variant="success"
                        onClick={() => {
                          this.iniciarSesion(iniciarSesionContext);
                        }}
                      >
                        Iniciar sesión
                      </Button>
                      )
                    }
                  </UserContext.Consumer>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
