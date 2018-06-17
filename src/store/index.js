import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import reducers from '../reducers/';

const initialState = {
  login: {
    isAuthenticated: !!window.localStorage.getItem('token'),
    token: window.localStorage.getItem('token')
  }
};

export const history = createBrowserHistory();
export const store = createStore(
  connectRouter(history)(reducers),
  initialState,
  applyMiddleware(
    thunk,
    createLogger(),
    routerMiddleware(history)
  )
);
