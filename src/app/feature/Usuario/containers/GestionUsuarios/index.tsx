import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow, Hr } from './styles';
import { ListaUsuarios } from '../../components/ListarUsuarios';
import { Usuario } from '../../models/Usuario';
import { BtnListarUsuarios } from '../../components/BtnListarUsuarios';

interface GestionUsuariosProps {
  usuarios: Array<Usuario>;
  listarUsuarios: () => void;
}

export const GestionUsuarios: React.FC<GestionUsuariosProps> = ({
  usuarios,
  listarUsuarios,
}) => {
  return (
    <DivContainer>
      <DivRow>
        <BtnListarUsuarios
          onListar={() => {
            listarUsuarios()
          }}
        ></BtnListarUsuarios>
      </DivRow>
      <Hr/>
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
};
