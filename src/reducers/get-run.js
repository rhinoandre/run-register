import { GET_RUN_ACTIONS } from '../constants';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case GET_RUN_ACTIONS.GET_RUN:
      return state;
    case GET_RUN_ACTIONS.GET_RUN_REQUEST:
      return state;
    case GET_RUN_ACTIONS.GET_RUN_RECEIVED:
      return {
        ...state,
        run: action.run
      }
    case GET_RUN_ACTIONS.GET_RUN_FAILED:
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
}