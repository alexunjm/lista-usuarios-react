import {
  LISTAR_USUARIOS,
  TiposAccionesUsuario,
} from '../../acciones/usuarios/UsuariosTiposAcciones';
import { EstadoUsuario } from '../../modelo/EstadoUsuario';
import { Usuario } from 'app/feature/Usuario/models/Usuario';

const initialState: EstadoUsuario = {
  usuarios: Array<Usuario>(),
  cantidadTotalUsuario: 0,
};

export default function (
  state = initialState,
  action: TiposAccionesUsuario
): EstadoUsuario {
  switch (action.type) {
    case LISTAR_USUARIOS: {
      const usuarios = action.payload;
      return {
        ...state,
        usuarios,
      };
    }

    default:
      return state;
  }
}
