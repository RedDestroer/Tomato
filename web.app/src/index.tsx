import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './index.css';
import App from './app/App';
import * as serviceWorker from './utils/serviceWorker';
import store from './store/configureStore';
import history from './utils/history';
import { Auth0Provider } from './utils/react-auth0-spa';
import { AUTH_CONFIG } from './config/configuration';

const onRedirectCallback = (appState?: any) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Auth0Provider
        domain={AUTH_CONFIG.domain}
        client_id={AUTH_CONFIG.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
