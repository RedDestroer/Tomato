import { LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';
import { action } from 'typesafe-actions';

export const loginSuccess = (data: object) => action(LOGIN_SUCCESS, data);
export const loginFailure = (err: Error) => action(LOGIN_FAILURE, err);
