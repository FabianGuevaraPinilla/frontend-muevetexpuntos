import React from 'react'

export const UserContext = React.createContext({
    auth: false,
    rol: "NONE",
    username: "",
    previewUser: false,
    //funciones de sesion 
    iniciarSesionContext: ()=>{},
    cerrarSesionContext: ()=>{},
    verComoUsuarioContext: ()=>{}
  });