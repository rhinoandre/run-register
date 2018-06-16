export const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_RECEIVED: 'LOGIN_RECEIVED',
  LOGIN_FAILED: 'LOGIN_FAILED'
};

export function loginRequest() {
  return {
    type: actions.LOGIN_REQUEST
  };
}

export function loginReceived(data) {
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

export function doLogin() {
  return dispatch => {
    dispatch(loginRequest());
    return fetch('...')
      .then(response => response.json())
      .then(data => dispatch(loginReceived(data)))
      .catch(error => dispatch(loginFailed(error)));
  };
}
