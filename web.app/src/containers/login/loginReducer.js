import { LOGIN_SUCCESS, LOGIN_FAILURE } from './loginConstants';

const initialState = {
  data: { }
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, data: action.payload, error: '' }

    case LOGIN_FAILURE:
      return {...state, error: action.payload }

    default:
      return state;
    }
}