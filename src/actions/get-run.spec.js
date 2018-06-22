import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import getRunAction from './get-run';

describe('Get Run Actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;

  beforeEach(() => {
    store = mockStore({ login: { token: 'sdfsdfdsf' } });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should retrieve the run with a given ID', async () => {
    // GIVEN
    fetchMock
      .getOnce(/runs\/1$/, {
        body: {
          id: 1,
          user_id: 1,
          friendly_name: 'Weekend Run',
          duration: 370,
          distance: 110,
          created: '2018-03-08 15:00:03'
        }
      }
    );

    // WHEN
    await store.dispatch(getRunAction(1));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'GET_RUN_REQUEST' },
      {
        type: 'GET_RUN_RECEIVED',
        run: {
          id: 1,
          user_id: 1,
          friendly_name: 'Weekend Run',
          duration: 370,
          distance: 110,
          created: '2018-03-08 15:00:03'
        }
      }
    ]);
  });

  it('should logout the user if the request return a 401 status', async () => {
    // GIVEN
    fetchMock
      .getOnce(/runs\/1$/, Promise.reject({ status: 401, error: 'malformed or invalid token' }));

    // WHEN
    await store.dispatch(getRunAction(1));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'GET_RUN_REQUEST' },
      {
        type: 'LOGOUT_USER',
        error: jasmine.any(Object)
      }
    ]);
  });

  it('should dispatch the get run failed error', async () => {
    // GIVEN
    fetchMock
      .getOnce(/runs\/1$/, Promise.reject({ status: 503, error: 'malformed or invalid token' }));

    // WHEN
    await store.dispatch(getRunAction(1));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'GET_RUN_REQUEST' },
      {
        type: 'GET_RUN_FAILED',
        error: jasmine.any(Object)
      }
    ]);
  });
});
