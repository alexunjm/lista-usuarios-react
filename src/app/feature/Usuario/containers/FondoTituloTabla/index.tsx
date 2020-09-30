import * as PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

interface FondoTituloTablaProps {
  color: string;
}

export const FondoTituloTabla: React.FC<FondoTituloTablaProps> = ({
  children,
  color,
}) => {
  const Caption = styled.caption`
    background-color: ${color};
  `;
  return <Caption>{children}</Caption>
};

FondoTituloTabla.propTypes = {
  color: PropTypes.string.isRequired,
  //@ts-ignore
  children: PropTypes.node.isRequired,
};