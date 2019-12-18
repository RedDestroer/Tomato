import { ABOUT_SUCCESS, ABOUT_FAILURE, ABOUT_API_PROPERTIES_CLEAR, ABOUT_API_PROPERTIES_IS_FETCHING } from './constants';
import ActionTypes from './actionTypes';

export type StateType = {
  isFetching: boolean;
  data: object | null;
  error: Error | null;
};

const initialState: StateType = {
  isFetching: false,
  data: null,
  error: null,
};

export default function about(state: StateType = initialState, action: ActionTypes) {
  switch (action.type) {
    case ABOUT_SUCCESS:
      return { ...state, data: action.payload, error: null };

    case ABOUT_FAILURE:
      return { ...state, data: null, error: action.payload };

    case ABOUT_API_PROPERTIES_CLEAR:
      return { ...state, data: null, error: null };

    case ABOUT_API_PROPERTIES_IS_FETCHING:
      return { ...state, isFetching: action.payload };

    default:
      return state;
  }
}
