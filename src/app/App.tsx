import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalErrorBoundary } from './core/errors/GlobalErrorBoundary';
import { NavigationHeader } from './shared/components/NavigationHeader';
import { UsuarioRouter } from './feature/Usuario/UsuarioRouter';
import { Provider } from 'react-redux';
import store from 'app/core/redux/store';

function App() {
  return (
    <GlobalErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <NavigationHeader />
          <Switch>
            <Route path="/" exact component={UsuarioRouter} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </GlobalErrorBoundary>
  );
}

export default App;
