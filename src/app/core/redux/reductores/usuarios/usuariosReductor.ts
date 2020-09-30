import {
  LISTAR_USUARIOS,
  CAMBIAR_FONDO_TITULO_TABLA,
  TiposAccionesUsuario,
} from '../../acciones/usuarios/UsuariosTiposAcciones';
import { EstadoUsuario } from '../../modelo/EstadoUsuario';
import { Usuario } from 'app/feature/Usuario/models/Usuario';

const initialState: EstadoUsuario = {
  usuarios: Array<Usuario>(),
  captionBackgroundColor: 'white',
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
    
    case CAMBIAR_FONDO_TITULO_TABLA: {
      const captionBackgroundColor = action.payload;
      console.log('usuariosReductor', CAMBIAR_FONDO_TITULO_TABLA, {captionBackgroundColor});
      
      return {
        ...state,
        captionBackgroundColor,
      };
    }

    default:
      return state;
  }
}