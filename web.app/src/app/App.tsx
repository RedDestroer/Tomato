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
import history from '../utils/history';
import Loading from '../components/Loading';
import { useAuth0 } from '../lib/auth0';

interface Props {}

const App: React.FC<Props> = props => {
  const { isInitializing } = useAuth0();

  if (isInitializing) {
    return <Loading />;
  }

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
