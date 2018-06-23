import { UPDATE_RUN_ACTIONS } from '../constants';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case UPDATE_RUN_ACTIONS.UPDATE_RUN:
      return state;
    case UPDATE_RUN_ACTIONS.UPDATE_RUN_REQUEST:
      return state;
    case UPDATE_RUN_ACTIONS.UPDATE_RUN_SUCCESS:
      return {
        ...state,
        run: {}
      };
    case UPDATE_RUN_ACTIONS.UPDATE_RUN_FAILED:
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
}