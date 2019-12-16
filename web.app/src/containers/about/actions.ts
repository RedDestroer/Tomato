import {
  ABOUT_SUCCESS,
  ABOUT_FAILURE,
  ABOUT_API_PROPERTIES_CLEAR,
  ABOUT_API_PROPERTIES_IS_FETCHING
} from './constants';
import { action } from 'typesafe-actions';

export const aboutSuccess = (data: object) => action(ABOUT_SUCCESS, data);
export const aboutFailure = (err: Error) => action(ABOUT_FAILURE, err);
export const aboutApiPropertiesClear = () => action(ABOUT_API_PROPERTIES_CLEAR);
export const aboutApiPropertiesFetchingTrue = () => action(ABOUT_API_PROPERTIES_IS_FETCHING, true);
export const aboutApiPropertiesFetchingFalse = () => action(ABOUT_API_PROPERTIES_IS_FETCHING, false);

// import { inferLiteralFromString } from '../../utils/utils';

// export const aboutSuccess = (data: object) => ({
//   type: inferLiteralFromString(ABOUT_SUCCESS),
//   payload: data,
// } as const);

// export const aboutFailure = (err: Error) => ({
//   type: inferLiteralFromString(ABOUT_FAILURE),
//   payload: err,
// } as const);

// export const aboutApiPropertiesClear = () => ({
//   type: inferLiteralFromString(ABOUT_API_PROPERTIES_CLEAR),
//   payload: undefined,
// } as const);
