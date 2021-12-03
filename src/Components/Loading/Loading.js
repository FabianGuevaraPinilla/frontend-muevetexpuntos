/*
Componente Loading
Función: Componente que muestra una animación de carga mientras se resuelven las peticiones
*/

import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show)
      this.setState({ show: nextProps.show });
  }
  render() {
    return (
      <>
        {this.state.show ? (
          <div id="loading-backdrop">
            
            <Spinner animation="border" variant="primary" />
  
          </div>
        ) : null}
      </>
    );
  }
}