import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';
import uiMessage from './ui_message';

const rootReducer = combineReducers({
  user,
  loading,
  uiMessage,
});

export default rootReducer;
