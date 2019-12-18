import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/navBar/NavBar';
import theme from './theme';
import './index.css';
import App from './app/App';
import { AboutConnected as About } from './views/about/About';
import * as serviceWorker from './utils/serviceWorker';
import store from './store/configureStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
