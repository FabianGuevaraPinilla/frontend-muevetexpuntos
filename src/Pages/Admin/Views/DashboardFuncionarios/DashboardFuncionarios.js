import React, { Component } from 'react'
import { Container, Nav, Row } from 'react-bootstrap';

//componentes usados
import FormFuncionarioEditar from "./Components/FormFuncionarioEditar";
import FormFuncionarioNuevo from "./Components/FormFuncionarioNuevo";
import TableFuncionarios from "./Components/TableFuncionarios";

import config from '../../../../config';

export default class DashboardFuncionarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaUsuarios: [],
            listaSucursales: [],

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
                            <Nav.Link eventKey="buscar">Búsqueda funcionarios</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Nuevo funcionario</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <TableFuncionarios
                            changeTab={this.changeTab}
                            setIdCurrentRow={this.setIdCurrentRow}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        <FormFuncionarioNuevo changeTab={this.changeTab} />
                    ) : (
                        <FormFuncionarioEditar
                            changeTab={this.changeTab}
                            getIdCurrentRow={this.getIdCurrentRow}
                        />
                    )}
                </Row>
            </Container>
        )
    }
}
