import { ABOUT_SUCCESS, ABOUT_FAILURE } from './constants';
import { inferLiteralFromString } from '../../utils/utils';

export const aboutSuccess = (data: object) => ({
  type: inferLiteralFromString(ABOUT_SUCCESS),
  payload: data
} as const);

export const aboutFailure = (err: Error) => ({
  type: inferLiteralFromString(ABOUT_FAILURE),
  payload: err
} as const);