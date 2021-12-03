import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';

import { request } from '../../../../../Helper/helper';

import ConfirmationPrompt from '../../../../../Components/Prompts/ConfirmationPrompt';
import Loading from '../../../../../Components/Loading/Loading';
import MessagePrompt from '../../../../../Components/Prompts/MessagePrompt';

const urlAPIPremios = "/premios";

export default class FormPremioEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idCurrentEvento: this.props.getIdCurrentRow(),
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            confirmation: {
                title: 'Modificar ',
                text: '¿Deseas modificar?',
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
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {
        this.getdataPremio();
        this.consultarCategoria();
    }
    componentDidUpdate() {
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

    getdataPremio() {
        this.setState({ loading: true });
        request
            .get(`${urlAPIPremios}/${this.state.idCurrentEvento}?simple=true`)
            .then((response) => {
                this.setState({
                    dataPremio: response.data,
                    loading: false,
                });
                console.log(response.data)
            })
            .catch((err) => {
                console.error(err);
                this.setState({ 
                    loading: false,
                    message: {
                        text: "Error realizando la petición",
                        show: true
                    }});
                
            });
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
        request
            .put(`${urlAPIPremios}/${this.state.idCurrentEvento}`, this.state.dataPremio)
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

    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        });
    }

    onConfirm() {
        this.setState(
            {
                confirmation: {
                    ...this.state.confirmation,
                    show: false,
                },
            },
            this.guardarCrudSimple()
        );
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
                <ConfirmationPrompt
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />

                <Row>
                    <h1>Editar</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                value={this.state.dataPremio.nombre}
                                onChange={(e) => this.setValue('nombre', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Categoria evento</Form.Label>
                            <Form.Select
                                value={this.state.dataPremio.id_categoria}
                                onChange={(e) => this.setValue('id_categoria', parseInt(e.target.value))}>
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
                                value={this.state.dataPremio.marca}
                                onChange={(e) => this.setValue('marca', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Detalle</Form.Label>
                            <Form.Control
                                value={this.state.dataPremio.detalle}
                                onChange={(e) => this.setValue('detalle', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Puntos necesarios</Form.Label>
                            <Form.Control
                                value={this.state.dataPremio.valor_puntos}
                                onChange={(e) => this.setValue('valor_puntos', parseInt(e.target.value))}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                value={this.state.dataPremio.cantidad}
                                onChange={(e) => this.setValue('cantidad', parseInt(e.target.value))}
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre foto</Form.Label>
                            <Form.Control
                                value={this.state.dataPremio.path_foto}
                                onChange={(e) => this.setValue('cupo', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>El premio esta disponible?</Form.Label>
                            <Form.Select
                                value={this.state.dataPremio.visible}
                                onChange={(e) => this.setValue('visible', e.target.value==="true"? true: false)}>
                                <option value="true">Disponible</option>
                                <option value="false">Oculto</option>
                            </Form.Select>
                        </Form.Group>
                        <Button
                            variant="primary"
                            onClick={() =>
                                this.setState({
                                    confirmation: { ...this.state.confirmation, show: true },
                                })
                            }
                        >
                            Guardar
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
