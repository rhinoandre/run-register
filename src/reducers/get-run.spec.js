import reducer from './get-run';

describe('GetRun Reducer', () => {
  it('should return the default state in the first call', () => {
    // WHEN
    const state = reducer(undefined, {});

    // THEN
    expect(state).toEqual({});
  });

  it('should handle GET_RUN just returning the current state', () => {
    // WHEN
    const state = reducer({ login: { token: 'justtoseeifitsreturningthestatecorrectly' } }, { type: 'GET_RUN' });

    // THEN
    expect(state).toEqual({ login: { token: 'justtoseeifitsreturningthestatecorrectly' }});
  });

  it('should handle GET_RUN_REQUESTED just returning the current state', () => {
    // WHEN
    const state = reducer({ login: { token: 'justtoseeifitsreturningthestatecorrectly' }}, { type: 'FETCH_RUN_REQUEST' });

    // THEN
    expect(state).toEqual({ login: { token: 'justtoseeifitsreturningthestatecorrectly' } });
  });

  it('should handle GET_RUN_RECEIVED returning state with the runs received', () => {
    // WHEN
    const state = reducer(undefined, {
      type: 'GET_RUN_RECEIVED',
      run: {
        "friendly_name": "Weekend Run",
        "duration": 370,
        "distance": 110,
        "created": "2018-03-08 15:00:03"
      }
    });

    // THEN
    expect(state).toEqual({
      run: {
        "friendly_name": "Weekend Run",
        "duration": 370,
        "distance": 110,
        "created": "2018-03-08 15:00:03"
      }
    });
  });

  it('should handle GET_RUN_RECEIVED replacing the previous values on state with the run received', () => {
    // WHEN
    const state = reducer(
      {
        run: {
          "friendly_name": "Just a test",
          "duration": 234,
          "distance": 112340,
          "created": "2018-03-08 15:00:03"
        }
      },
      {
        type: 'GET_RUN_RECEIVED',
        run: {
          "friendly_name": "Weekend Run",
          "duration": 370,
          "distance": 110,
          "created": "2018-03-08 15:00:03"
        }
      }
    );

    // THEN
    expect(state).toEqual({
      run: {
        "friendly_name": "Weekend Run",
        "duration": 370,
        "distance": 110,
        "created": "2018-03-08 15:00:03"
      }
    });
  });

  it('should handle GET_RUN_FAILED', () => {
    // WHEN
    const state = reducer(undefined, { type: 'GET_RUN_FAILED', error: 'Does\'t matter what has here' });

    // THEN
    expect(state).toEqual({
      errorMessage: 'Does\'t matter what has here'
    });
  });
});