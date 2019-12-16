import { combineReducers } from 'redux';
import login from '../containers/login/loginReducer';
import about from '../containers/about/reducer';

// tslint:disable-next-line: typedef
const rootReducer = () => combineReducers({
  login,
  about,
});

export default rootReducer;
