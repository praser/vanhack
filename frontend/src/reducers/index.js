import { combineReducers } from 'redux';
import apiLastResponse from './response';
import categories from './category'
import loading from './loading';
import uiMessage from './ui_message';
import user from './user';

const rootReducer = combineReducers({
  apiLastResponse,
  categories,
  loading,
  uiMessage,
  user,
});

export default rootReducer;
