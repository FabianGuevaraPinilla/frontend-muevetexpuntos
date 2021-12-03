import React, { Component } from 'react'
import { Container, Nav, Row } from 'react-bootstrap';

//componentes usados
import FormEventoEditar from "./Components/FormEventoEditar";
import FormEventoNuevo from "./Components/FormEventoNuevo";
import TableEventos from "./Components/TableEventos";

import config from '../../../../config';

export default class DashboardEventos extends Component {

    constructor(props) {
        super(props);
        this.state = {
             isLoadingData: true,
            //navegacion
            currentTab: 'buscar',
            //id selecionado
            _id: null,
        }

        //métodos de navegación entre opciones
        this.changeTab = this.changeTab.bind(this);
        this.setIdCurrentEvento = this.setIdCurrentEvento.bind(this);
        this.getIdCurrentEvento = this.getIdCurrentEvento.bind(this);

    }

    //colocar el tab a mostrar
    changeTab(tab) {
        this.setState({ currentTab: tab });
    }
    
    setIdCurrentEvento(id) {
        this.setState({ _id: id });
    }

    getIdCurrentEvento() {
        return this.state._id;
    }

    render() {
        let isLoadingData = this.state.isLoadingData;
        console.log(isLoadingData)
        return (
            <Container id="crudSimple-container">
                <Row>
                    <Nav
                        fill
                        variant="tabs"
                        defaultActiveKey="buscar"
                        onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="buscar">Búsqueda eventos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear evento</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <TableEventos
                            changeTab={this.changeTab}
                            setIdCurrentEvento={this.setIdCurrentEvento}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        <FormEventoNuevo changeTab={this.changeTab} />
                    ) : (
                        <FormEventoEditar
                            changeTab={this.changeTab}
                            getIdCurrentEvento={this.getIdCurrentEvento}
                        />
                    )}
                </Row>
            </Container>
        )
    }
}
