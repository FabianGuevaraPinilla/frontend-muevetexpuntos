import React, { Component } from 'react'
import { Container, Nav, Row } from 'react-bootstrap';

//componentes usados
import FormPremioEditar from "./Components/FormPremioEditar";
import FormPremioNuevo from "./Components/FormPremioNuevo";
import TablePremios from "./Components/TablePremios";

import config from '../../../../config';

export default class DashboardPremios extends Component {

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
        this.setIdCurrentRow = this.setIdCurrentRow.bind(this);
        this.getIdCurrentRow = this.getIdCurrentRow.bind(this);

    }

    //colocar el tab a mostrar
    changeTab(tab) {
        this.setState({ currentTab: tab });
    }

    setIdCurrentRow(id) {
        this.setState({ _id: id });
    }

    getIdCurrentRow() {
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
                            <Nav.Link eventKey="buscar">Búsqueda premios</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear premio</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <TablePremios
                            changeTab={this.changeTab}
                            setIdCurrentRow={this.setIdCurrentRow}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        <FormPremioNuevo changeTab={this.changeTab} />
                    ) : (
                        <FormPremioEditar
                            changeTab={this.changeTab}
                            getIdCurrentRow={this.getIdCurrentRow}
                        />
                    )}
                </Row>
            </Container>
        )
    }
}
