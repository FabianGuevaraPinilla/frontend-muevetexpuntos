import React from 'react'

import "./FormPremioNuevo.scss"

import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../../../../../Helper/helper';
import Loading from '../../../../../Components/Loading/Loading';
import MessagePrompt from '../../../../../Components/Prompts/MessagePrompt';


const urlAPIPremios = "/premios";

export default class FormPremioNuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: '',
        show: false,
      },
      loading: false,
      dataPremio: {
        id_categoria: 0,
        nombre: "",
        marca: "",
        detalle: "",
        path_foto: "",
        cantidad: 0,
        valor_puntos: 0,
        visible: true,
    },
    listaCategoriaPremios: [],
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  setValue(index, value) {
    this.setState({
        dataPremio: {
            ...this.state.dataPremio,
            [index]: value,
        },
    });
}

  guardarCrudSimple() {
    this.setState({ loading: true });
    console.log(this.state.dataPremio)
    request
      .post(urlAPIPremios, this.state.dataPremio)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ 
            loading: false,
            message: {
                text: "ERROR realizando la petición",
                show: true,
            },
        });
      });
  }
  componentDidMount(){
    this.consultarCategoria();
  }
  componentDidUpdate(){
    console.log(this.state.dataPremio)
  }
  consultarCategoria() {
    //hace la consulta de las categorias
    request.
        get(`${urlAPIPremios}/categorias`)
        .then((response) => {
            this.setState({
                listaCategoriaPremios: response.data,
                loading: false,
            });
            console.log(response.data)
        })
        .catch((err) => {
            console.error(err);
            this.setState({ loading: false });
        });
}
  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab('buscar');
  }

  render() {
    return (
      <Container id="crudSimple-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />

        <Row>
          <h1>Crear</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('nombre', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categoria evento</Form.Label>
              <Form.Select
              required
                onChange={(e) => this.setValue('id_categoria', parseInt(e.target.value))}>
                  <option>Seleccione una categoria</option>
                {
                  this.state.listaCategoriaPremios.map((cat) => (
                    <option value={cat._id} key={cat._id}>
                      {cat.categoria}
                    </option>
                  ))
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('marca', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Detalle</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('detalle', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Puntos necesarios</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('valor_puntos', parseInt(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('cantidad', parseInt(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre foto</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('path_foto', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>El premio esta disponible?</Form.Label>
              <Form.Select
                onChange={(e) => this.setValue('visible', e.target.value === "true" ? true : false)}>
                <option value="true">Disponible</option>
                <option value="false">Oculto</option>
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => console.log(this.guardarCrudSimple())}
            >
              Guardar
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
