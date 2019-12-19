import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import InfoBox from '../components/InfoBox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutConnected as About } from '../views/about/About';

interface State {}

interface Props {}

class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/">
              <InfoBox />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
