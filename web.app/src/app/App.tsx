import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import NavBar from '../components/NavBar';
import InfoBox from '../components/InfoBox';
import Profile from '../views/profile/Profile';
import PrivateRoute from '../components/PrivateRoute';
import NotFound from '../components/NotFound';
import { Router, Switch, Route } from 'react-router-dom';
import { AboutConnected as About } from '../views/about/About';
import { Container } from '@material-ui/core';
import { history } from '../utils/history';
import store from '../store/configureStore';
import { Auth0Provider } from '../components/Auth0Provider';

const onRedirectCallback = (appState?: any) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

interface Props {}

const App: React.FC<Props> = props => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Auth0Provider onRedirectCallback={onRedirectCallback}>
          <div className="App">
            <Router history={history}>
              <NavBar />
              <Container>
                <Switch>
                  <Route exact path="/" component={InfoBox} />
                  <PrivateRoute path="/profile" component={Profile} />
                  <Route path="/about" component={About} />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </Router>
          </div>
        </Auth0Provider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
