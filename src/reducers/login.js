import { LOGIN_ACTIONS } from '../constants';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case LOGIN_ACTIONS.LOGIN_REQUEST:
      return state;
    case LOGIN_ACTIONS.LOGIN_RECEIVED:
      return {
        ...state,
        date: Date.now(),
        token: action.data.token,
        isAuthenticated: true
      };
    case LOGIN_ACTIONS.LOGIN_FAILED:
      return { ...state, errorMessage: 'An error occurred' };
    case LOGIN_ACTIONS.LOGOUT_USER:
      return {
        ...state,
        token: '',
        isAuthenticated: false
      }
    default:
      return state;
  }
}
