import { ABOUT_SUCCESS, ABOUT_FAILURE, ABOUT_API_PROPERTIES_CLEAR } from './constants';
import { inferLiteralFromString } from '../../utils/utils';

export const aboutSuccess = (data: object) => ({
  type: inferLiteralFromString(ABOUT_SUCCESS),
  payload: data,
} as const);

export const aboutFailure = (err: Error) => ({
  type: inferLiteralFromString(ABOUT_FAILURE),
  payload: err,
} as const);

export const aboutApiPropertiesClear = () => ({
  type: inferLiteralFromString(ABOUT_API_PROPERTIES_CLEAR),
  payload: undefined,
} as const);
