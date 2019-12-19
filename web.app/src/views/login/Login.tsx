import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as actions from './dispatchActions';
import Types from 'AppTypes';

const mapStateToProps = (state: Types.RootState) => ({
  data: state.about.data,
  isFetching: state.about.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      login: actions.login,
    },
    dispatch
  );

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: object | null;
  };

type State = {
  username: string;
  password: string;
};

export class Login extends Component<Props, State> {
  readonly state: State = {
    username: '',
    password: '',
  };

  constructor(props: Props) {
    super(props);

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  handleUserNameChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    console.log(event);
    //this.setState({username: event});
  }

  render() {
    return (
      <div>
        <TextField helperText="Enter your Name" onChange={this.handleUserNameChange} />
        <br />
        <TextField type="password" helperText="Enter your Password" defaultValue="Password" />
        <br />
      </div>
    );
  }
}

export const LoginConnected = connect(mapStateToProps, mapDispatchToProps)(Login);
