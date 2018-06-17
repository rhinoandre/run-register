import { actions } from '../actions/login';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case actions.LOGIN_REQUEST:
      return state;
    case actions.LOGIN_RECEIVED:
      return Object.assign({}, state, {
        date: Date.now(),
        token: action.data.token
      });
    case actions.LOGIN_FAILED:
      return Object.assign({}, state, { errorMessage: 'An error occurred' });
    default:
      return state;
  }
}
