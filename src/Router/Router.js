import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home"
import Admin from "../Pages/Admin/Admin"
import EventosPage from "../Pages/Eventos/EventosPage";
import PremiosPage from "../Pages/Premios/PremiosPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import EventosInscripcion from "../Pages/Eventos/Components/EventosInscripcion";
import ResumenUserPage from "../Pages/ResumenUserPage/ResumenUserPage"

import DashboardPremios from "../Pages/Admin/Views/DashboardPremios/DashboardPremios";
import DashboardEventos from "../Pages/Admin/Views/DashboardEventos/DashboardEventos";
import DashboardMain from "../Pages/Admin/Views/DashboardMain/DashboardMain";
import DashboardFuncionarios from "../Pages/Admin/Views/DashboardFuncionarios/DashboardFuncionarios";
import { UserContext } from "../Contexts/UserContext";
import { getAuth, getRol } from "../Helper/helper";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

import DashboardRoute from "./DashboardRoute";



export default class AppRouter extends React.Component {

  constructor(props) {
    super(props);
    this.rutas = {
      user: [
        {
          path: ["/", "/home"],
          component: { Home }
        },
        {
          path: "/eventos",
          component: { EventosPage }
        },
        {
          path: "/premios",
          component: { PremiosPage }
        }
      ],
      admin: [
        {
          path: ["/", "/admin"],
          component: { Admin }
        }
      ]
    }
    this.state = {
      auth: getAuth(),
      rol: getRol(),
    }
  }

  static contextType = UserContext;

  componentDidMount() {
    const { auth, rol } = this.context;
    console.log(" se monta el router " + rol)
    if (getAuth() && (!auth)) {
      // si está autenticado, pero el contexto no
      console.log("esta el token ")
      this.setState({
        auth: getAuth(),
        rol: getRol()
      })
    }
  }



  componentDidUpdate() {
    console.log("actualizando router")
    console.log(this.state)
    console.log(window.location.pathname)
    const { auth, rol } = this.context;
    if (rol !== this.state.rol) {
      this.setState({
        rol: rol
      })
    }
    if (this.state.auth !== getAuth()) {
      this.setState({
        auth: getAuth()
      })
    }
    console.log(this.state)
  }

  render() {

    console.log("estado auth " + this.state.auth);

    if (!this.state.auth && !getAuth()) {
      console.log("aplicando render del router login")
      return (
        <div className="mt-5 pt-2">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect from="*" to="/login" />
          </Switch>
        </div>
      )
    }
    else {
      if (this.state.rol === "USER") {
        return (
          <div className="mt-5 pt-2">
            <Switch>
              <PrivateRoute exact path={["/", "/home"]} component={Home} />
              <PrivateRoute exact path="/resumen" component={ResumenUserPage} />
              <PrivateRoute exac path="/eventos" component={EventosPage} />
              <PrivateRoute path="/eventos/inscripcion/:idEvento" component={EventosInscripcion} />
              <PrivateRoute path="/premios" component={PremiosPage} />
              <Redirect from="/login" to="/" />
              <Route path={"*"} component={NotFoundPage} />
            </Switch>
          </div >
        )
      }
      else {
        return (
          <div className="mt-5 pt-2">
            <Switch>
              <PrivateRoute exact path="/eventos" component={EventosPage} />
              <PrivateRoute path="/eventos/inscripcion/:idEvento" component={EventosInscripcion} />
              <PrivateRoute path="/premios" component={PremiosPage} />
              <DashboardRoute path="/admin/funcionarios"><DashboardFuncionarios/></DashboardRoute>
              <DashboardRoute exact path={["/admin", "/admin/main"]}><DashboardMain/></DashboardRoute>
              <DashboardRoute path="/admin/eventos"><DashboardEventos/></DashboardRoute>
              <DashboardRoute path="/admin/premios"><DashboardPremios/></DashboardRoute>
              <Route path={"*"} component={NotFoundPage} />
              <Redirect from="/" to="/admin" />
            </Switch>
          </div >
        );
      }

    }
  }
}