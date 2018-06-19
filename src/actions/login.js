import { push } from 'connected-react-router';

import { userAPI } from '../services/user';

export const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_RECEIVED: 'LOGIN_RECEIVED',
  LOGIN_FAILED: 'LOGIN_FAILED',
  SAVE_TOKEN: 'SAVE_TOKEN'
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

export function doLogin(loginData) {
  return dispatch => {
    dispatch(loginRequest());
    return userAPI.login(loginData)
      .then(response => response.json())
      .then(data => dispatch(loginReceived(data)))
      .then(() => dispatch(push('/')))
      .catch(error => dispatch(loginFailed(error)));
  };
}
