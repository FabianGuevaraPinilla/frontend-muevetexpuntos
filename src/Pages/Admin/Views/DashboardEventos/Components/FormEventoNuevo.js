import React from 'react'

import "./FormEventoNuevo.scss"

import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../../../../../Helper/helper';
import Loading from '../../../../../Components/Loading/Loading';
import MessagePrompt from '../../../../../Components/Prompts/MessagePrompt';


const urlAPIEventos = "/eventos";

export default class FormEventoNuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: '',
        show: false,
      },
      loading: false,
      dataEvento: {
        id_categoria: 0,
        id_tipo: 0,
        id_sucursal: 0,
        titulo: "",
        descripcion: "",
        fecha_inicio: "",
        fecha_fin: "",
        lugar: "",
        url: "",
        path_foto: "",
        cupo: 0,
        valor_puntos: 0,
        disponible: true,
    },
    listaCategoriaEventos: [],
    listaSucursales: [],
    listaTipoEventos: []
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }
  componentDidMount() {

    this.consultarCategoria();
    this.consultarSucursales();
    this.consultarTipos();
}
componentDidUpdate() {
    console.log(this.state.dataEvento)
}
  consultarCategoria() {
    //hace la consulta de las categorias
    request.
      get(`${urlAPIEventos}/categorias`)
      .then((response) => {
        this.setState({
          listaCategoriaEventos: response.data,
          loading: false,
        });
        console.log(response.data)
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
  consultarTipos() {
    //hace fetch de las categorias
    request.
      get(`${urlAPIEventos}/tipos`)
      .then((response) => {
        this.setState({
          listaTipoEventos: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
  consultarSucursales() {
    request.
      get("/sucursales")
      .then((response) => {
        this.setState({
          listaSucursales: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
  setValue(index, value) {
    this.setState({
      dataEvento: {
        ...this.state.dataEvento,
        [index]: value,
      },
    });
  }

  guardarCrudSimple() {
    this.setState({ loading: true });
    request
      .post(urlAPIEventos, this.state.dataEvento)
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
              <Form.Label>Título</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('titulo', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('descripcion', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo evento</Form.Label>
              <Form.Select
                type
                onChange={(e) => this.setValue('id_tipo', parseInt(e.target.value))}>
                  <option>Seleccione tipo</option>
                {
                  this.state.listaTipoEventos.map((tipo) => (
                    <option value={tipo._id} key={tipo._id}>
                      {tipo.tipoEvento}
                    </option>
                  ))
                }
              </Form.Select>
            </Form.Group>
            {
              this.state.dataEvento.id_tipo != 1 ? (
                <Form.Group className="mb-3" controlId="formBasic">
                  <Form.Label>Lugar evento</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setValue('lugar', e.target.value)}
                    required={this.state.dataEvento.id_tipo === 1 ? false : true}
                  />
                </Form.Group>
              ) : (<></>)
            }
            {
              this.state.dataEvento.id_tipo != 2 ? (
                <Form.Group className="mb-3" controlId="formBasic">
                  <Form.Label>Url evento</Form.Label>
                  <Form.Control
  
                    onChange={(e) => this.setValue('url', e.target.value)}
                    required={this.state.dataEvento.id_tipo === 2 ? false : true}
                  />
                </Form.Group>
              ) : (<></>)
            }
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categoria evento</Form.Label>
              <Form.Select
                onChange={(e) => this.setValue('id_categoria', parseInt(e.target.value))}>
                  <option>Seleccione categoria</option>
                {
                  this.state.listaCategoriaEventos.map((cat) => (
                    <option value={cat._id} key={cat._id}>
                      {cat.categoria}
                    </option>
                  ))
                }
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sucursal</Form.Label>
              <Form.Select
                type
                onChange={(e) => this.setValue('id_sucursal', parseInt(e.target.value))}>
                  <option>Seleccione sucursal</option>
                {
                  this.state.listaSucursales.map((sucursal) => (
                    <option value={sucursal._id} key={sucursal._id}>
                      {sucursal.nombre}
                    </option>
                  ))
                }
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Puntos necesarios</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('valor_puntos', parseInt(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Cupos ofertados</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('cupo', parseInt(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha Inicio</Form.Label>
              <Form.Control
                min="2021-12-01T00:00"
                max="2023-01-01T00:00"
                type="datetime-local"
                onChange={(e) => this.setValue('fecha_inicio', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha Fin</Form.Label>
              <Form.Control
                min="2021-12-01T00:00"
                max="2023-01-01T00:00"
                type="datetime-local"
                onChange={(e) => this.setValue('fecha_fin', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre foto</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('path_foto', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>El evento esta disponible?</Form.Label>
              <Form.Select
                onChange={(e) => this.setValue('disponible', e.target.value === "true" ? true : false)}>
                  <option>Seleccione disponibilidad</option>
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
