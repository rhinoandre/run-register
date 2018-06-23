import { CREATE_RUN_ACTIONS, LOGIN_ACTIONS } from '../constants';
import { runAPI } from '../services';
import throwErrorForConnectionNotOK from './errorHandlerForConnection';

export function createRun() {
  return {
    type: CREATE_RUN_ACTIONS.CREATE_RUN
  };
}

export function createRunRequest() {
  return {
    type: CREATE_RUN_ACTIONS.CREATE_RUN_REQUEST
  };
}

export function createRunSuccessful() {
  return {
    type: CREATE_RUN_ACTIONS.CREATE_RUN_SUCCESS
  };
}

export function createRunFailed(error) {
  return {
    type: handleErrorStatusCode(error.status),
    error
  };
}

function handleErrorStatusCode(status) {
  let actionType = CREATE_RUN_ACTIONS.CREATE_RUN_FAILED;
  if (status === 401) {
    actionType = LOGIN_ACTIONS.LOGOUT_USER;
  }

  return actionType;
}

export default function createRunAction(run) {
  return (dispatch, getStore) => {
    dispatch(createRunRequest());
    const { login } = getStore();
    return runAPI.create(run, login.token)
      .then(throwErrorForConnectionNotOK)
      .then(() => dispatch(createRunSuccessful()))
      .catch(error => dispatch(createRunFailed(error)));
  };
}
