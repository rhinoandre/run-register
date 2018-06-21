import { RUN_LIST_ACTIONS } from '../constants';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case RUN_LIST_ACTIONS.FETCH_RUN_REQUEST:
      return {
        ...state
      };
    case RUN_LIST_ACTIONS.FETCH_RUN_RECEIVED:
      return {
        ...state,
        runs: action.data
      }
    case RUN_LIST_ACTIONS.FETCH_RUN_FAILED:
      return {
        ...state,
        errorMessage: action.error
      }
    default:
      return state;
  }
}