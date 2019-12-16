import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropertyTable from '../../components/PropertyTable';
import { Property } from './../../dom/Property';
import * as actions from './dispatchActions';
import Types from 'AppTypes';

const mapStateToProps = (state: Types.RootState) => ({
  data: state.about.data,
  isFetching: state.about.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      getApiProperies: actions.getApiProperies,
    },
    dispatch
  );

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    data: object | null;
  };

type State = {
};

export class About extends Component<Props, State> {

  componentDidMount() {
    const { getApiProperies } = this.props;

    getApiProperies();
  }

  render() {
    const { isFetching, data } = this.props;
    const properties = getProperties(data) || [];

    return (
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            API properties
          </Typography>
          <div>{isFetching ? 'Fetching properties...' : <PropertyTable properties={properties} />}
          </div>
        </Box>
      </Container>
    );
  }
}

const getProperties = (data: object | null): Property[] | null => {
  if (data) {
    const result: Property[] = [];
    const keys: string[] = Object.getOwnPropertyNames(data);
    keys.forEach(key => {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        // @ts-ignore
        const property: any = data[key];
        result.push(new Property(key, property));
      }
    });

    return result;
  }

  return null;
};

export const AboutConnected = connect(mapStateToProps, mapDispatchToProps)(About);
