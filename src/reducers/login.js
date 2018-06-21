import { actions } from '../actions/login';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case actions.LOGIN_REQUEST:
      return state;
    case actions.LOGIN_RECEIVED:
      return {
        ...state,
        date: Date.now(),
        token: action.data.token,
        isAuthenticated: true
      };
    case actions.LOGIN_FAILED:
      return { ...state, errorMessage: 'An error occurred' };
    case actions.LOGOUT_USER:
      return {
        ...state,
        token: '',
        isAuthenticated: false
      }
    default:
      return state;
  }
}
