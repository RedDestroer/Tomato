import { combineReducers } from 'redux';
import login from '../containers/login/loginReducer';
import about from '../containers/about/reducer';

const rootReducer = () => combineReducers({
  login,
  about,
});

export default rootReducer;
