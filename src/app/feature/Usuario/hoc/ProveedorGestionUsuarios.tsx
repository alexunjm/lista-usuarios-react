import {
  listarUsuariosAsync,
} from 'app/core/redux/acciones/usuarios/UsuariosAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionUsuarios } from '../containers/GestionUsuarios';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.usuarios;
};

export const ProveedorGestionUsuarios = connect(mapStateToProps, {
  listarUsuarios: listarUsuariosAsync,
})(GestionUsuarios);
