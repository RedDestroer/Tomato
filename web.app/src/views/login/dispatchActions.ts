import { Dispatch } from 'redux';
import * as actionCreators from './actions';
import ActionTypes from './actionTypes';

export function login() {
  return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
    dispatch(actionCreators.loginSuccess({}));
  };
}
