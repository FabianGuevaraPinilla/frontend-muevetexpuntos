import React, { Component } from "react";
import ListaEventos from "./Components/ListaEventos";
import Loading from "../../Components/Loading/Loading"

import { Container } from "react-bootstrap";
import { request } from "../../Helper/helper";

const urlEventos = "/eventos"
export default class EventosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataEventos: [],
    };
  }

  //funcion que actualice
  componentDidMount(){
    request
    .get(urlEventos)
    .then((response)=>{
      console.log(response.data)
      this.setState({
        loading: false,
        dataEventos: response.data
      })

    })
    .catch((err)=>{
      this.setState({
        loading: false
      }
      )
    })
  }

  render() {
    return (
      <Container className="eventos_page__container">
        <Loading show={this.state.loading} />
        <h1>PRÓXIMOS EVENTOS - ACUMULA PUNTOS</h1>
        <ListaEventos dataEventos={this.state.dataEventos}></ListaEventos>
      </Container>
    );
  }
}
