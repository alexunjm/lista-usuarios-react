import * as React from 'react';
import { ProveedorFondoTituloTabla } from '../../hoc/ProveedorFondoTituloTabla';
import { Usuario } from '../../models/Usuario';
import { Table } from './styles';

export interface ListaUsuariosProps {
  usuarios: Array<Usuario>;
}

export class ListaUsuarios extends React.Component<ListaUsuariosProps> {

  render() {
    return (
      <Table>
        <ProveedorFondoTituloTabla>Lista de Usuarios</ProveedorFondoTituloTabla>
        <thead>
          <tr>
            <th>
              <b>id</b>
            </th>
            <th>
              <b>nombre</b>
            </th>
            <th>
              <b>e-mail</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.usuarios.map((usuario: Usuario) => {
            return (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
};
