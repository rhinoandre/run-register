import { combineReducers } from 'redux';

import login from './login';
import runList from './run-list';
import getRun from './get-run';

export default combineReducers({
  login,
  runList,
  run: getRun
});
