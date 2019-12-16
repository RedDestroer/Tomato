import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './constants';
import ActionTypes from './actionTypes';

export type StateType = {
  data: object | null;
  error: Error | null;
};

const initialState: StateType = {
  data: null,
  error: null,
};

export default function login(state: StateType = initialState, action: ActionTypes) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, data: action.payload, error: null };

    case LOGIN_FAILURE:
      return {...state, data: null, error: action.payload };

    default:
      return state;
    }
}
