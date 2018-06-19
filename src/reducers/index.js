import { combineReducers } from 'redux';

import login from './login';
import runList from './run-list';

export default combineReducers({
  login,
  runList
});
