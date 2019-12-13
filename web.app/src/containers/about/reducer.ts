import { ABOUT_SUCCESS, ABOUT_FAILURE, ABOUT_API_PROPERTIES_CLEAR } from './constants';
import ActionTypes from './actionTypes';

export type StateType = { data: object | null, error: Error | null };

const initialState: StateType = {
  data: null,
  error: null
}

export default function login(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case ABOUT_SUCCESS:
      return {...state, data: action.payload, error: null };

    case ABOUT_FAILURE:
      return {...state, data: null, error: action.payload };

    case ABOUT_API_PROPERTIES_CLEAR:
      return {...state, data: null, error: null };

    default:
      return state;
    }
}