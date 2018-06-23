import { CREATE_RUN_ACTIONS } from '../constants';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case CREATE_RUN_ACTIONS.CREATE_RUN:
      return state;
    case CREATE_RUN_ACTIONS.CREATE_RUN_REQUEST:
      return state;
    case CREATE_RUN_ACTIONS.CREATE_RUN_SUCCESS:
      return state;
    case CREATE_RUN_ACTIONS.CREATE_RUN_FAILED:
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
}