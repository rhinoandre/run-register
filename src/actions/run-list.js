import { runAPI } from '../services/';
import { LOGIN_ACTIONS, RUN_LIST_ACTIONS } from '../constants';
import throwErrorForConnectionNotOK from './errorHandlerForConnection';

export function allRunRequest() {
  return {
    type: RUN_LIST_ACTIONS.FETCH_RUN_REQUEST
  };
}

export function fetchRuns(data) {
  return {
    type: RUN_LIST_ACTIONS.FETCH_RUN_RECEIVED,
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
  let actionType = RUN_LIST_ACTIONS.FETCH_RUN_FAILED;
  if (status === 401) {
    actionType = LOGIN_ACTIONS.LOGOUT_USER;
  }

  return actionType;
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