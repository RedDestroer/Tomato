import { LOGIN_SUCCESS, LOGIN_FAILURE } from './loginConstants';

export function login() {
  return (dispatch) => {
    fetch(window.constants.page)
      .then((response) => {
        return response.json();
      }).then((data) => {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      }).catch((ex) => {
        dispatch({ type: LOGIN_FAILURE, payload: ex });
      });
    };
}