import * as PropTypes from 'prop-types';
import * as React from 'react';

interface FondoTituloTablaProps {
  color: string;
}

export const FondoTituloTabla: React.FC<FondoTituloTablaProps> = ({
  children,
  color,
}) => {
  return <caption style={{backgroundColor: color}}>{children}</caption>
};

FondoTituloTabla.propTypes = {
  color: PropTypes.string.isRequired,
  //@ts-ignore
  children: PropTypes.node.isRequired,
};