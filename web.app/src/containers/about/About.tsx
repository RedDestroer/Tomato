import React, { Component } from 'react';
import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as actions from './actions';
import { PropertyInfo } from '../../components/PropertyInfo';
import { StateType } from './reducer';
import ActionTypes from './actionTypes';

interface State {};

interface Props {
  data: object | null,
  onShow: Function
};

class About extends Component<Props, State> {
  state = {};

  componentWillReceiveProps(nextProps: Props) {
    console.log()
  }

  async componentDidMount() {
    const { onShow } = this.props;

    onShow();
  }
  
  render() {
    const { data } = this.props;

    console.log(this.props);
    console.log(data);
    console.log(this.state);

      return (
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              API properties
            </Typography>
          </Box>
        </Container>
      );
  }
}

const mapStateToProps = (state: StateType, ownProps: Props) => ({
  data: state.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    onShow: actions.getApiProperies,
  }, dispatch);

export const AboutConnected = connect(mapStateToProps, mapDispatchToProps)(About);
export default About;