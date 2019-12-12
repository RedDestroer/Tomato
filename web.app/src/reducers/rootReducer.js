import { combineReducers } from 'redux'
import login from '../containers/login/loginReducer'
import about from '../containers/about/reducer';

export default combineReducers({
  login,
  about
})