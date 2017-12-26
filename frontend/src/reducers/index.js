import {combineReducers} from 'redux';
import {login} from './login';
import {addMessage} from './toast';
import {requestHasErrored, requestIsLoading} from './request';
import {signup} from './signup';

export default combineReducers({
  addMessage,
  login,
  requestHasErrored,
  requestIsLoading,
  signup
})