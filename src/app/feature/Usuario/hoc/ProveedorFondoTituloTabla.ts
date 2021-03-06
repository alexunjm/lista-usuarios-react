import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { connect } from 'react-redux';
import { FondoTituloTabla } from '../containers/FondoTituloTabla';

const mapStateToProps = (state: EstadoGeneral) => {
  return {color: state.usuarios.captionBackgroundColor};
};

export const ProveedorFondoTituloTabla = connect(mapStateToProps, {
})(FondoTituloTabla);
