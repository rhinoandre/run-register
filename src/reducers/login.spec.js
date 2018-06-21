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
    const state = reducer(undefined, { type: 'LOGIN_REQUEST' });
  
    // THEN
    expect(state).toEqual({});
  });
  
  it('should handle LOGIN_RECEIVED (state plus token and isAuthenticated)', () => {
    // WHEN
    const state = reducer(undefined, { type: 'LOGIN_RECEIVED', data: { token: 'myamazingandsecuretoken' }});
  
    // THEN
    expect(state).toEqual({ date: jasmine.any(Number), token: 'myamazingandsecuretoken', isAuthenticated: true });
  });

  it('should handle LOGIN_FAILED (state plue errorMessage)', () => {
    // WHEN
    const state = reducer(undefined, { type: 'LOGIN_FAILED' });
  
    // THEN
    expect(state).toEqual({ errorMessage: 'An error occurred' });
  });

  it('should handle LOGIN_FAILED (state plue errorMessage)', () => {
    // WHEN
    const state = reducer(undefined, { type: 'LOGOUT_USER' });
  
    // THEN
    expect(state).toEqual({ isAuthenticated: false, token: '' });
  });
});