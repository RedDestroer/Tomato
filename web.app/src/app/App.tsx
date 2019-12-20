import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import InfoBox from '../components/InfoBox';
import Profile from '../views/profile/Profile';
import PrivateRoute from '../components/PrivateRoute';
import { Router, Switch, Route } from 'react-router-dom';
import { AboutConnected as About } from '../views/about/About';
import { LoginConnected as Login } from '../views/login/Login';
import Signin from '../views/signin/Signin';
import { Container } from '@material-ui/core';
import history from '../utils/history';

interface State {}

interface Props {}

class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <NavBar />
          <Container>
            <Switch>
              <Route exact path="/" component={InfoBox} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
