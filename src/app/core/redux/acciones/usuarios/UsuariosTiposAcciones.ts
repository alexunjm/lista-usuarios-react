import { Usuario } from 'app/feature/Usuario/models/Usuario';

export const LISTAR_USUARIOS = 'LISTAR_USUARIOS';
export const CAMBIAR_FONDO_TITULO_TABLA = 'CAMBIAR_FONDO_TABLA';

interface AccionListarUsuarios {
  type: typeof LISTAR_USUARIOS;
  payload: Usuario[];
}
interface AccionCambiarFondoTituloTabla {
  type: typeof CAMBIAR_FONDO_TITULO_TABLA;
  payload: string;
}

export type TiposAccionesUsuario =
  | AccionListarUsuarios
  | AccionCambiarFondoTituloTabla;
