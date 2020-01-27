import { combineReducers } from 'redux';
import authContent from './auth'
import payment from './payment'

export default combineReducers({
    authContent,
    payment,
  });  