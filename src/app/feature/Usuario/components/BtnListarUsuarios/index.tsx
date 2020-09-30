import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'app/shared/components/Button';

interface BtnListarUsuariosProps {
  onListar: () => any;
}

export const BtnListarUsuarios: React.FC<BtnListarUsuariosProps> = ({
  onListar,
}) => {
  const handleListar = () => {
    onListar()
  };
  return (
    <Button onClick={handleListar}>
      Obtener Usuarios
    </Button>
  );
};

BtnListarUsuarios.propTypes = {
  onListar: PropTypes.func.isRequired,
};
