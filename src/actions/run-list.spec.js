import configureStoreMock from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import { getAllRuns } from './run-list';

const middleware = [thunk];
const mockStore = configureStoreMock(middleware);

describe('Run List Action', () => {
  afterAll(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should dispatch all actions to successfully fetch the runs', async () => {
    // GIVEN
    fetchMock.
      getOnce(/runs$/, { body: [
        {
          "friendly_name": "Just a test",
          "duration": 234,
          "distance": 112340,
          "created": "2018-03-08 15:00:03"
        },
        {
          "friendly_name": "Just another test",
          "duration": 2342,
          "distance": 234324,
          "created": "2018-03-06 15:00:03"
        }
      ],
      headers: { 'Content-Type': 'application/json' }
    });

    // AND
    const store = mockStore({ runs: {} });

    // WHEN
    await store.dispatch(getAllRuns());

    // THEN
    expect(store.getActions()).toEqual([
      { type: 'FETCH_RUN_REQUEST' },
      { 
        type: 'FETCH_RUN_RECEIVED',
        data: [
          {
            "friendly_name": "Just a test",
            "duration": 234,
            "distance": 112340,
            "created": "2018-03-08 15:00:03"
          },
          {
            "friendly_name": "Just another test",
            "duration": 2342,
            "distance": 234324,
            "created": "2018-03-06 15:00:03"
          }
        ]
      }
    ]);
  });

  it('should dispatch the fetch error action', async () => {
    // GIVEN
    fetchMock.
      getOnce(/runs$/, 503, { overwriteRoutes: true });
  
    // AND
    const store = mockStore({ runs: {} });
  
    // WHEN
    await store.dispatch(getAllRuns());
  
    // THEN
    expect(store.getActions()).toEqual([
      { type: 'FETCH_RUN_REQUEST' },
      { type: 'FETCH_RUN_FAILED', error: jasmine.any(Object) }
    ]);
  });
});