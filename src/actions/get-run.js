import { GET_RUN_ACTIONS, LOGIN_ACTIONS } from '../constants';
import { runAPI } from '../services';
import throwErrorForConnectionNotOK from './errorHandlerForConnection';

export function getRun(id) {
  return {
    type: GET_RUN_ACTIONS.GET_RUN,
    id
  };
}

export function getRunRequest() {
  return {
    type: GET_RUN_ACTIONS.GET_RUN_REQUEST
  };
}

export function getRunReceived(run) {
  return {
    type: GET_RUN_ACTIONS.GET_RUN_RECEIVED,
    run
  };
}

export function getRunFailed(error) {
  return {
    type: handleErrorStatusCode(error.status),
    error
  };
}

function handleErrorStatusCode(status) {
  let actionType = GET_RUN_ACTIONS.GET_RUN_FAILED;
  if (status === 401) {
    actionType = LOGIN_ACTIONS.LOGOUT_USER;
  }

  return actionType;
}

export default function getRunAction(id) {
  return (dispatch, getStore) => {
    dispatch(getRunRequest());
    const { login } = getStore();
    return runAPI.getById(id, login.token)
      .then(throwErrorForConnectionNotOK)
      .then(response => response.json())
      .then(run => dispatch(getRunReceived(run)))
      .catch(error => dispatch(getRunFailed(error)));
  };
}
