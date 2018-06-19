import { actions } from '../actions/run-list';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case actions.FETCH_RUN_REQUEST:
      return {
        ...state
      };
    case actions.FETCH_RUN_RECEIVED:
      return {
        ...state,
        runs: action.data
      }
    case actions.FETCH_RUN_FAILED:
      return {
        ...state,
        errorMessage: action.error
      }
    default:
      return state;
  }
}