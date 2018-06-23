import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import createRunAction from './create-run';

describe('Create Run Actions', () => {
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

  it('should create successfully', async () => {
    // GIVEN
    fetchMock
      .once(/runs$/, {
        body: {
          user_id: 1,
          friendly_name: 'Weekend Run',
          duration: 370,
          distance: 110,
          created: '2018-03-08 15:00:03'
        }
      }
    );

    // WHEN
    await store.dispatch(createRunAction({
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110
    }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'CREATE_RUN_REQUEST' },
      { type: 'CREATE_RUN_SUCCESS' }
    ]);

    // AND
    expect(fetchMock.lastUrl()).toBe('http://localhost:3001/runs');
    expect(fetchMock.lastOptions()).toEqual({
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110,
      created: jasmine.any(String)
    });
  });

  it('should logout the user if the request return a 401 status', async () => {
    // GIVEN
    fetchMock
      .once(/runs$/, Promise.reject({ status: 401, error: 'malformed or invalid token' }));

    // WHEN
    await store.dispatch(createRunAction({
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110
    }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'CREATE_RUN_REQUEST' },
      {
        type: 'LOGOUT_USER',
        error: jasmine.any(Object)
      }
    ]);

    // AND
    expect(fetchMock.lastUrl()).toBe('http://localhost:3001/runs');
    expect(fetchMock.lastOptions()).toEqual({
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110,
      created: jasmine.any(String)
    });
  });

  it('should dispatch the create run failed error if any unexpected error happen', async () => {
    // GIVEN
    fetchMock
      .once(/runs$/, Promise.reject({ status: 503, error: 'malformed or invalid token' }));

    // WHEN
    await store.dispatch(createRunAction({
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110,
      created: '2018-03-08 15:00:03'
    }));

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'CREATE_RUN_REQUEST' },
      {
        type: 'CREATE_RUN_FAILED',
        error: jasmine.any(Object)
      }
    ]);

    // AND
    expect(fetchMock.lastUrl()).toBe('http://localhost:3001/runs');
    expect(fetchMock.lastOptions()).toEqual({
      friendly_name: 'Weekend Run',
      duration: 370,
      distance: 110,
      created: jasmine.any(String)
    });
  });
});
