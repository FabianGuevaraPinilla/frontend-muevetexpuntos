import { isUndefined } from 'util';
import axios from "axios";
import Cookies from 'universal-cookie/es6';




//HOST
import config from '../config';

const cookies = new Cookies();
const HOST_API = config.HOST_API;

export function calculaExpiracionSesion() {
  const now = new Date().getTime();
  const newDate = now + 60 * 30 * 1000;
  return new Date(newDate);
}
export function getAuth() {
  return !getSesion() ? false : true;
}

export function getSesion() {
  return isUndefined(cookies.get('_s')) ? false : cookies.get('_s');
}

export function getRol() {
  return isUndefined(cookies.get('rol')) ? "NONE" : cookies.get('rol')
}
export function getUsername() {
  return isUndefined(cookies.get('username')) ? "" : cookies.get('username')
}
export function renovarSesion() {
  const sesion = getSesion();
  const username = getUsername();
  const rol = getRol();
  if (!sesion) window.location.href = '/login'
  cookies.set('_s', sesion, {
    path: '/',
    expires: calculaExpiracionSesion()
  })
  cookies.set('username', username, {
    path: '/',
    expires: calculaExpiracionSesion()
  })
  cookies.set('rol', rol, {
    path: '/',
    expires: calculaExpiracionSesion()
  })
  return sesion
}

//métodos para realizar peticiones realizando las
export const request = {
  get: function (services) {
    let token = renovarSesion();
    return axios.get(`${HOST_API}${services}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  post: function (services, data) {
    let token = renovarSesion();
    return axios.post(`${HOST_API}${services}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  put: function (services, data) {
    let token = renovarSesion();
    return axios.put(`${HOST_API}${services}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  delete: function (services) {
    let token = renovarSesion();
    return axios.delete(`${HOST_API}${services}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
