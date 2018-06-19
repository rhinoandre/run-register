import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as loginActions from './login';
import { actions } from './login';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login Action: ', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should PUSH to "/" after logging in successfully', async () => {
    // GIVEN
    fetchMock
      .postOnce('http://localhost:3001/users/login', { body: { token: 'myamazingtoken' }, headers: { 'content-type': 'application/json' } });

    // AND
    const store = mockStore({ login: {} })

    // WHEN
    await store.dispatch(loginActions.doLogin({ email: 'rhinoandre@gmail.com', passwd: '123456' }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: actions.LOGIN_REQUEST },
      { data: { token: 'myamazingtoken' }, type: actions.LOGIN_RECEIVED },
      // ACTION FROM Connected Router
      { payload: { args: ['/'], method: 'push' }, type: '@@router/CALL_HISTORY_METHOD' }
    ]);

    // AND
    expect(localStorage.setItem).toHaveBeenLastCalledWith('token', 'myamazingtoken');
  });
});