import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import InfoBox from '../components/InfoBox';
import Profile from '../views/profile/Profile';
import PrivateRoute from '../components/PrivateRoute';
import NotFound from '../components/NotFound';
import { Router, Switch, Route } from 'react-router-dom';
import { AboutConnected as About } from '../views/about/About';
import { Container } from '@material-ui/core';
import { history } from '../utils/history';

interface Props {}

const App: React.FC<Props> = props => {
  return (
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
  );
};

export default App;
