import { push } from 'connected-react-router';

import { userAPI } from '../services/';

export const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_RECEIVED: 'LOGIN_RECEIVED',
  LOGIN_FAILED: 'LOGIN_FAILED',
  SAVE_TOKEN: 'SAVE_TOKEN',
  LOGOUT_USER: 'LOGOUT_USER'
};

export function loginRequest() {
  return {
    type: actions.LOGIN_REQUEST
  };
}

export function loginReceived(data) {
  localStorage.setItem('token', data.token);
  return {
    type: actions.LOGIN_RECEIVED,
    data
  };
}

export function loginFailed(error) {
  return {
    type: actions.LOGIN_FAILED,
    error
  };
}

function handle200WithError(body) {
  if (body.error) {
    throw body;
  }

  return body;
}

export function doLogin(loginData) {
  return dispatch => {
    dispatch(loginRequest());
    return userAPI.login(loginData)
      .then(response => response.json())
      .then(handle200WithError)
      .then(data => dispatch(loginReceived(data)))
      .then(() => dispatch(push('/')))
      .catch(error => dispatch(loginFailed(error)));
  };
}
