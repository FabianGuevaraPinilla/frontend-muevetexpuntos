import React from "react";

export default class PremiosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consultandoData: false,
      dataVacia: false,
      dataPremios: [],
      dataFiltrada: [],
      categoriaSelect: "Todos",
      verTodos: true,
    };
  }

  selectCategoriaFiltro() {}

  render() {
    return (
      <>
        <div className="Premios_encabezado-categorias">
          <h1>Catégorias</h1>
          <nav>
            <ul className="px-0">
              <li className="py-1">
                <a
                  className={"active"}
                  onClick={() => {
                    this.selectCategoriaFiltro("Todos");
                  }}
                >
                  TODOS
                </a>
              </li>
              <li className="py-1">
                <a
                  className={"active"}
                  onClick={() => {
                    this.selectCategoriaFiltro("Hogar");
                  }}
                >
                  HOGAR
                </a>
              </li>
              <li className="py-1">
                <a
                  className={"active"}
                  onClick={() => {
                    this.selectCategoriaFiltro("Deportes");
                  }}
                >
                  DEPORTES
                </a>
              </li>
              <li className="py-1">
                <a
                  className={"active"}
                  onClick={() => {
                    this.selectCategoriaFiltro("Mascotas");
                  }}
                >
                  MASCOTAS
                </a>
              </li>
              <li className="py-1">
                <a
                  className={"active"}
                  onClick={() => {
                    this.selectCategoriaFiltro("Herramientas");
                  }}
                >
                  HERRAMIENTAS
                </a>
              </li>
              <li className="py-1">
                <a
                  className={"active"}
                  onClick={() => {
                    this.selectCategoriaFiltro("Moda");
                  }}
                >
                  MODA
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Premios_encabezado-titulo">
          <h1>Redime tus puntos en fabulosos premios</h1>
        </div>
      </>
    );
  }
}
