import { runAPI } from '../services/';

import { actions as loginActions } from './login';

export const actions = {
  FETCH_RUN_REQUEST: 'FETCH_RUN_REQUEST',
  FETCH_RUN_RECEIVED: 'FETCH_RUN_RECEIVED',
  FETCH_RUN_FAILED: 'FETCH_RUN_FAILED'
};

export function allRunRequest() {
  return {
    type: actions.FETCH_RUN_REQUEST
  };
}

export function fetchRuns(data) {
  return {
    type: actions.FETCH_RUN_RECEIVED,
    data
  };
}

export function fetchRunFailed(error) {
  return {
    type: handleErrorStatusCode(error.status),
    error
  }
}

function handleErrorStatusCode(status) {
  let actionType = actions.FETCH_RUN_FAILED;
  if (status === 401) {
    actionType = loginActions.LOGOUT_USER;
  }

  return actionType;
}

// Code needed because fetch doesn't call catch when an HTTP error happen
// It just throws an error when the internet connection is down
// I could not test this behavior
// https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
function throwErrorForConnectionNotOK(response) {
  if (!response.ok) {
    throw response;
  }

  return response;
}

export function getAllRuns() {
  return (dispatch, getState) => {
    dispatch(allRunRequest());
    const { login } = getState();
    return runAPI.getAll(login.token)
      .then(throwErrorForConnectionNotOK)
      .then(res => res.json())
      .then(data => dispatch(fetchRuns(data.data)))
      .catch(error => dispatch(fetchRunFailed(error)));
  }
}