import { combineReducers } from 'redux';
import login from '../views/login/reducer';
import about from '../views/about/reducer';

const rootReducer = () =>
  combineReducers({
    login,
    about,
  });

export default rootReducer;
