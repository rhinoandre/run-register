import { UPDATE_RUN_ACTIONS, LOGIN_ACTIONS } from '../constants';
import { runAPI } from '../services';
import throwErrorForConnectionNotOK from './errorHandlerForConnection';

export function createRun() {
  return {
    type: UPDATE_RUN_ACTIONS.UPDATE_RUN
  };
}

export function updateRunRequest() {
  return {
    type: UPDATE_RUN_ACTIONS.UPDATE_RUN_REQUEST
  };
}

export function updateRunSuccessful() {
  return {
    type: UPDATE_RUN_ACTIONS.UPDATE_RUN_SUCCESS
  };
}

export function updateRunFailed(error) {
  return {
    type: handleErrorStatusCode(error.status),
    error
  };
}

function handleErrorStatusCode(status) {
  let actionType = UPDATE_RUN_ACTIONS.UPDATE_RUN_FAILED;
  if (status === 401) {
    actionType = LOGIN_ACTIONS.LOGOUT_USER;
  }

  return actionType;
}

export default function updateRunAction(run) {
  return (dispatch, getStore) => {
    dispatch(updateRunRequest());
    const { login } = getStore();
    return runAPI.update(run, login.token)
      .then(throwErrorForConnectionNotOK)
      .then(() => dispatch(updateRunSuccessful()))
      .catch(error => dispatch(updateRunFailed(error)));
  };
}
