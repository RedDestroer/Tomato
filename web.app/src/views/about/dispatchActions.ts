import { Dispatch } from 'redux';
import { getTomatoService } from '../../services/TomatoService';
import * as actionCreators from './actions';
import ActionTypes from './actionTypes';

export function getApiProperies() {
  return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
    dispatch(actionCreators.aboutApiPropertiesFetchingTrue());

    const tomatoService = getTomatoService();

    return tomatoService
      .getApiProperties()
      .then(data => {
        dispatch(actionCreators.aboutSuccess(data));
      })
      .catch(err => {
        dispatch(actionCreators.aboutApiPropertiesClear());
        dispatch(actionCreators.aboutFailure(err));
      })
      .finally(() => {
        dispatch(actionCreators.aboutApiPropertiesFetchingFalse());
      });
  };
}

export function clearApiProperties() {
  return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
    dispatch(actionCreators.aboutApiPropertiesClear());
  };
}
