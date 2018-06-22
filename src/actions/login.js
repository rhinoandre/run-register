import { push } from 'connected-react-router';

import { userAPI } from '../services/';
import { LOGIN_ACTIONS } from '../constants/';

export function loginRequest() {
  return {
    type: LOGIN_ACTIONS.LOGIN_REQUEST
  };
}

export function loginReceived(data) {
  localStorage.setItem('token', data.token);
  return {
    type: LOGIN_ACTIONS.LOGIN_RECEIVED,
    data
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_ACTIONS.LOGIN_FAILED,
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
      .then(() => dispatch(push('/runs')))
      .catch(error => dispatch(loginFailed(error)));
  };
}
