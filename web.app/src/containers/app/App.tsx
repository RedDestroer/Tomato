import React, { Component } from 'react';
import './App.css';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//import LoginScreen from '../loginScreen/LoginScreen';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();

interface AppState {}

interface AppProps {}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/about">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class App extends Component<AppProps, AppState> {
  state = {};

  componentWillMount() {
    // // var loginPage: Array<React.ReactElement> = [];
    // // loginPage.push(<LoginScreen parentContext={this}/>);
    // // this.setState({
    // //   loginPage:loginPage
    // // })
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App v4-beta example
            </Typography>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}

export default App;
