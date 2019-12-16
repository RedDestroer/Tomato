import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import PropertyTable from '../../components/PropertyTable';
import { Property } from './../../dom/Property';
import * as actions from './actions';
// import { PropertyInfo } from '../../components/PropertyInfo';
// import { StateType } from './reducer';
// import ActionTypes from './actionTypes';
import Types from 'AppTypes';

interface State {
  isFetching: boolean;
  properties: Property[];
};

interface Props {
  data: object | null
};

class About extends Component<Props, State> {
  state = {
    isFetching: false,
    properties: []
  };

  static propTypes = {
    data: PropTypes.object
  }

  componentWillReceiveProps(nextProps: Props) {
    
  }

  async componentDidMount() {
    actions.clearApiProperties();
    actions.getApiProperies();
  }
  
  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            API properties
          </Typography>
          <p>{this.state.isFetching ? 'Fetching properties...' : <PropertyTable properties={this.state.properties} />}
          </p>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state: Types.RootState, ownProps: Props) => ({
  data: state
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getApiProperies: actions.getApiProperies,
  }, dispatch);

export const AboutConnected = connect(mapStateToProps, mapDispatchToProps)(About);

export default About;