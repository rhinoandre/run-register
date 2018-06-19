import { runAPI } from '../services/';

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
    type: actions.FETCH_RUN_FAILED,
    error
  }
}

export function getAllRuns() {
  return dispatch => {
    dispatch(allRunRequest());
    return runAPI.getAll()
      .then(res => res.json())
      .then(data => dispatch(fetchRuns(data)))
      .catch(error => dispatch(fetchRunFailed(error)));
  }
}