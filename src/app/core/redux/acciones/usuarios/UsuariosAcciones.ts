import {
  LISTAR_USUARIOS,
  TiposAccionesUsuario,
} from './UsuariosTiposAcciones';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { UsuarioRepositorio } from 'app/core/api/usuarios.repositorio';

export function listarUsuarios(
  usuarios: Array<Usuario>,
): TiposAccionesUsuario {
  return {
    type: LISTAR_USUARIOS,
    payload: usuarios,
  };
}

export function listarUsuariosAsync() {
  return function (dispacth: any) {
    UsuarioRepositorio.listar()
    .then((respuesta: any) =>{
      dispacth(
        listarUsuarios(respuesta.data.data)
      )
    });
  };
}
