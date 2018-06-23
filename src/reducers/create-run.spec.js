import reducer from './create-run';

describe('Create Run Reducer', () => {
  it('should return the default state in the first call', () => {
    // WHEN
    const state = reducer(undefined, {});

    // THEN
    expect(state).toEqual({});
  });

  it('should handle CREATE_RUN just returning the current state', () => {
    // WHEN
    const state = reducer(
      { login: { token: 'justtoseeifitsreturningthestatecorrectly' }},
      { type: 'CREATE_RUN' }
    );

    // THEN
    expect(state).toEqual({ login: { token: 'justtoseeifitsreturningthestatecorrectly' }});
  });

  it('should handle CREATE_RUN_REQUESTED just returning the current state', () => {
    // WHEN
    const state = reducer(
      { login: { token: 'justtoseeifitsreturningthestatecorrectly' }},
      { type: 'FETCH_RUN_REQUEST' }
    );

    // THEN
    expect(state).toEqual({ login: { token: 'justtoseeifitsreturningthestatecorrectly' } });
  });

  it('should handle CREATE_RUN_SUCCESS just returning the current state', () => {
    // WHEN
    const state = reducer(
      { login: { token: 'justtoseeifitsreturningthestatecorrectly' }},
      { type: 'CREATE_RUN_SUCCESS' }
    );

    // THEN
    expect(state).toEqual({ login: { token: 'justtoseeifitsreturningthestatecorrectly' }});
  });

  it('should handle CREATE_RUN_FAILED returning an error message', () => {
    // WHEN
    const state = reducer(
      { login: { token: 'justtoseeifitsreturningthestatecorrectly' }},
      { type: 'CREATE_RUN_FAILED', error: 'Does\'t matter what has here' }
    );

    // THEN
    expect(state).toEqual({
      login: { token: 'justtoseeifitsreturningthestatecorrectly' },
      errorMessage: 'Does\'t matter what has here'
    });
  });
});