import reducer from './update-run';

describe('Update Run Reducer', () => {
  it('should return the default state in the first call', () => {
    // WHEN
    const state = reducer(undefined, {});

    // THEN
    expect(state).toEqual({});
  });

  it('should handle UPDATE_RUN just returning the current state', () => {
    // WHEN
    const state = reducer(
      { login: { token: 'justtoseeifitsreturningthestatecorrectly' }},
      { type: 'UPDATE_RUN' }
    );

    // THEN
    expect(state).toEqual({ login: { token: 'justtoseeifitsreturningthestatecorrectly' }});
  });

  it('should handle UPDATE_RUN_REQUESTED just returning the current state', () => {
    // WHEN
    const state = reducer(
      { login: { token: 'justtoseeifitsreturningthestatecorrectly' }},
      { type: 'FETCH_RUN_REQUEST' }
    );

    // THEN
    expect(state).toEqual({ login: { token: 'justtoseeifitsreturningthestatecorrectly' } });
  });

  it('should handle UPDATE_RUN_SUCCESS cleaning the run property', () => {
    // WHEN
    const state = reducer(
      {
        run: {
          id: 1,
          user_id: 1,
          friendly_name: 'Just a test',
          duration: 234,
          distance: 112340,
          created: '2018-03-08 15:00:03'
        }
      },
      { type: 'UPDATE_RUN_SUCCESS' }
    );

    // THEN
    expect(state).toEqual({ run: {} });
  });

  it('should handle UPDATE_RUN_FAILED returning an error message', () => {
    // WHEN
    const state = reducer(
      { login: { token: 'justtoseeifitsreturningthestatecorrectly' }},
      { type: 'UPDATE_RUN_FAILED', error: 'Does\'t matter what has here' }
    );

    // THEN
    expect(state).toEqual({
      login: { token: 'justtoseeifitsreturningthestatecorrectly' },
      errorMessage: 'Does\'t matter what has here'
    });
  });
});