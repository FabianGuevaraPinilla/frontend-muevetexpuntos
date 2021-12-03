import React, { useContext } from "react";



import "./NavbarApp.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
// import logo from "../../Assets/images/logo_light.png"

import Button from '@material-ui/core/Button';

//Navbars
import NavbarUser from "./NavbarUser";
import NavbarAdmin from "./NavbarAdmin";
import NavbarLogin from "./NavbarLogin";

import { UserContext } from "../../Contexts/UserContext";
import { getAuth, getRol, getUsername } from "../../Helper/helper";


// export default function NavbarApp() {

//     const selectNavbar = (rol) => {
//       console.log("rol recibido "+ rol)
//     switch (rol) {
//       case "ADMIN":
//         return <NavbarAdmin></NavbarAdmin>
//       case "USER":
//         return <NavbarUser ></NavbarUser>
//       default:
//         return <NavbarLogin></NavbarLogin>
//     }
//   }
//     return (
//       <div>
//         <UserContext.Consumer>
//             {
//               ({rol})=>(
//                 <React.Fragment>
//                   {
//                     selectNavbar(rol)
//                   }
//                   <p>{rol}</p>
//                 </React.Fragment>
//               )
//             }
//         </UserContext.Consumer>
//        </div>
//     )
//   }



export default class NavbarApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rol: "",
      user: ""
    };
  }
  static contextType = UserContext;

  selectNavbar = (rol) => {
    switch (rol) {
      case "ADMIN":
        return <NavbarAdmin></NavbarAdmin>
      case "USER":
        return <NavbarUser></NavbarUser>
      default:
        return <NavbarLogin></NavbarLogin>
    }
  }

  componentDidMount() {
    const {auth, rol, username } = this.context;
    if (getAuth() && (auth === false)) {
      console.log("navbarApp dice, ya esta auth")
      const { iniciarSesionContext } = this.context;
      iniciarSesionContext(true, getRol(), getUsername())
    }
    console.log(rol)
    this.state = {
      rol: rol,
      user: username
    };
  }

  componentDidUpdate() {
    console.log("navapp actualizado")
  }


  render() {

    return (

      <UserContext.Consumer>
        {
          ({ rol }) => (
            <React.Fragment>
              {
                this.selectNavbar(rol)
              }
              <p>{rol}</p>
            </React.Fragment>
          )
        }
      </UserContext.Consumer>

    )

  }
}