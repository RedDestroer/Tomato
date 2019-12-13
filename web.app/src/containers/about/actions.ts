import { Dispatch } from 'react';
import { getTomatoService } from '../../services/TomatoService'
import * as actionCreators from './actionCreators';
import ActionTypes from './actionTypes';

export function getApiProperies() {
  return (dispatch: Dispatch<ActionTypes>) => {
    var tomatoService = getTomatoService();

    tomatoService.getApiProperties()
      .then((data) => {
        dispatch(actionCreators.aboutSuccess(data));
      }).catch((err) => {
        dispatch(actionCreators.aboutFailure(err));
      });
    };
}

export function clearApiProperties() {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(actionCreators.aboutApiPropertiesClear())
  }
}