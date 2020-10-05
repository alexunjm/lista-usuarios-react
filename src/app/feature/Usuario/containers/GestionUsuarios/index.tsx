import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow, DivSpaceBetween, Hr } from './styles';
import { ListaUsuarios } from '../../components/ListarUsuarios';
import { Usuario } from '../../models/Usuario';
import { BtnListarUsuarios } from '../../components/BtnListarUsuarios';
import InputColor, { Color } from 'react-input-color';

interface GestionUsuariosProps {
  usuarios: Array<Usuario>;
  listarUsuarios: () => void;
  cambiarFondoTituloTabla: (color: string) => void;
}

export const GestionUsuarios: React.FC<GestionUsuariosProps> = ({
  usuarios,
  listarUsuarios,
  cambiarFondoTituloTabla,
}) => {
  return (
    <DivContainer>
      <DivSpaceBetween>
        <BtnListarUsuarios
          onListar={() => {
            listarUsuarios()
          }}
        ></BtnListarUsuarios>
        <InputColor
          initialValue="#fff"
          onChange={(color: Color) => cambiarFondoTituloTabla(color.hex)}
          placement="right"
        />
      </DivSpaceBetween>
      <Hr />
      <DivRow>
        <ListaUsuarios
          usuarios={usuarios}
        />
      </DivRow>
      <DivRow className="end-space"></DivRow>
    </DivContainer>
  );
};

GestionUsuarios.propTypes = {
  usuarios: PropTypes.array.isRequired,
  listarUsuarios: PropTypes.func.isRequired,
  cambiarFondoTituloTabla: PropTypes.func.isRequired,
};
