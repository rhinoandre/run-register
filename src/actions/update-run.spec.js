import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import updateRunAction from './update-run';

describe('Update Run Actions', () => {
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

  it('should update successfully', async () => {
    // GIVEN
    fetchMock
      .once(/runs\/1$/, {
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
    await store.dispatch(updateRunAction({
      id: 1,
      user_id: 1,
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110,
      created: '2018-03-08 15:00:03'
    }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'UPDATE_RUN_REQUEST' },
      { type: 'UPDATE_RUN_SUCCESS' }
    ]);

    // AND
    expect(fetchMock.lastUrl()).toBe('http://localhost:3001/runs/1');
    expect(fetchMock.lastOptions()).toEqual({
      id: 1,
      user_id: 1,
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110
    });
  });

  it('should logout the user if the request return a 401 status', async () => {
    // GIVEN
    fetchMock
      .once(/runs\/2$/, Promise.reject({ status: 401, error: 'malformed or invalid token' }));

    // WHEN
    await store.dispatch(updateRunAction({
      id: 2,
      user_id: 1,
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110
    }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'UPDATE_RUN_REQUEST' },
      {
        type: 'LOGOUT_USER',
        error: jasmine.any(Object)
      }
    ]);

    // AND
    expect(fetchMock.lastUrl()).toBe('http://localhost:3001/runs/2');
    expect(fetchMock.lastOptions()).toEqual({
      id: 2,
      user_id: 1,
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110
    });
  });

  it('should dispatch the update run failed error if any unexpected error happen', async () => {
    // GIVEN
    fetchMock
      .once(/runs\/3$/, Promise.reject({ status: 503, error: 'malformed or invalid token' }));

    // WHEN
    await store.dispatch(updateRunAction({
      id: 3,
      user_id: 1,
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110,
      created: '2018-03-08 15:00:03'
    }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'UPDATE_RUN_REQUEST' },
      {
        type: 'UPDATE_RUN_FAILED',
        error: jasmine.any(Object)
      }
    ]);

    // AND
    expect(fetchMock.lastUrl()).toBe('http://localhost:3001/runs/3');
    expect(fetchMock.lastOptions()).toEqual({
      id: 3,
      user_id: 1,
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110
    });
  });
});
