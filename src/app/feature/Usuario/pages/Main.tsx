import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionUsuarios } from '../hoc/ProveedorGestionUsuarios';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Usuarios" description="Gestión de usuarios">
      <ProveedorGestionUsuarios></ProveedorGestionUsuarios>
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
