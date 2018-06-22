import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as loginActions from './login';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login Action: ', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should PUSH to "/runs" after logging in successfully', async () => {
    // GIVEN
    fetchMock
      .postOnce(/users\/login$/, { body: { token: 'myamazingtoken' }, headers: { 'content-type': 'application/json' } });

    // AND
    const store = mockStore({ login: {} })

    // WHEN
    await store.dispatch(loginActions.doLogin({ email: 'rhinoandre@gmail.com', passwd: '123456' }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'LOGIN_REQUEST' },
      { type: 'LOGIN_RECEIVED', data: { token: 'myamazingtoken' } },
      // ACTION FROM Connected Router
      { payload: { args: ['/runs'], method: 'push' }, type: '@@router/CALL_HISTORY_METHOD' }
    ]);

    // AND
    expect(localStorage.setItem).toHaveBeenLastCalledWith('token', 'myamazingtoken');
  });

  it('should fail when http request fails', async () => {
    // GIVEN
    fetchMock
      .once(/\/users\/login$/, 503);

    // AND
    const store = mockStore({ login: {} });

    // WHEN
    await store.dispatch(loginActions.doLogin({ email: 'rhinoandre@gmail.com', passwd: '123456' }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'LOGIN_REQUEST' },
      { type: 'LOGIN_FAILED', error: jasmine.any(Object) }
    ])
  });

  it('should fail when an wrogn password is userd (even with the API returning an 200)', async () => {
    // GIVEN
    fetchMock
      .postOnce(/\/users\/login$/, { status: 200, body: { error: true, message: 'wrong credentials' }});

    // AND
    const store = mockStore({ login: {} });

    // WHEN
    await store.dispatch(loginActions.doLogin({ email: 'rhinoandre@gmail.com', passwd: '123456' }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'LOGIN_REQUEST' },
      { type: 'LOGIN_FAILED', error: jasmine.any(Object) }
    ])
  });
});