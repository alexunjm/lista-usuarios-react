import { Usuario } from 'app/feature/Usuario/models/Usuario';

export const LISTAR_USUARIOS = 'LISTAR_USUARIOS';

interface AccionListarUsuarios {
  type: typeof LISTAR_USUARIOS;
  payload: Usuario[];
}

export type TiposAccionesUsuario =
  | AccionListarUsuarios;
