import { actions } from '../actions/login';
import reducer from './login';

describe('Login Reducer', () => {
  it('should return the initialState when no action is passed', () => {
    // WHEN
    const state = reducer(undefined, {});

    // THEN
    expect(state).toEqual({});
  });

  it('should handle LOGIN_REQUEST (just state for now)', () => {
    // WHEN
    const state = reducer(undefined, { type: actions.LOGIN_REQUEST });
  
    // THEN
    expect(state).toEqual({});
  });
  
  it('should handle LOGIN_RECEIVED (state plus token and isAuthenticated)', () => {
    // WHEN
    const state = reducer(undefined, { type: actions.LOGIN_RECEIVED, data: { token: 'myamazingandsecuretoken' }});
  
    // THEN
    expect(state).toEqual({ date: jasmine.any(Number), token: 'myamazingandsecuretoken', isAuthenticated: true });
  });

  it('should handle LOGIN_FAILED (state plue errorMessage)', () => {
    // WHEN
    const state = reducer(undefined, { type: actions.LOGIN_FAILED });
  
    // THEN
    expect(state).toEqual({ errorMessage: 'An error occurred' });
  });
});