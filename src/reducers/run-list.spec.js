import reducer from './run-list';

describe('RunList Reducer', () => {
  it('should return the default state in the first call', () => {
    // WHEN
    const state = reducer(undefined, {});

    // THEN
    expect(state).toEqual({});
  });

  it('should handle FETCH_RUN_REQUEST (just return the default state for now)', () => {
    // WHEN
    const state = reducer(undefined, { type: 'FETCH_RUN_REQUEST' });

    // THEN
    expect(state).toEqual({});
  });

  it('should handle FETCH_RUN_RECEIVED returning state with the runs returned', () => {
    // WHEN
    const state = reducer(undefined, {
      type: 'FETCH_RUN_RECEIVED',
      data: [
        {
          "friendly_name": "Weekend Run",
          "duration": 370,
          "distance": 110,
          "created": "2018-03-08 15:00:03"
        },
        {
          "friendly_name": "Week day run",
          "duration": 456,
          "distance": 789,
          "created": "2018-03-06 15:00:03"
        }
      ]
    });

    // THEN
    expect(state).toEqual({
      runs: [
        {
          "friendly_name": "Weekend Run",
          "duration": 370,
          "distance": 110,
          "created": "2018-03-08 15:00:03"
        },
        {
          "friendly_name": "Week day run",
          "duration": 456,
          "distance": 789,
          "created": "2018-03-06 15:00:03"
        }
      ]
    });
  });

  it('should handle FETCH_RUN_RECEIVED replacing the previous values on state with the runs returned', () => {
    // WHEN
    const state = reducer(
      {
        runs: [
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
      },
      {
        type: 'FETCH_RUN_RECEIVED',
        data: [
          {
            "friendly_name": "Weekend Run",
            "duration": 370,
            "distance": 110,
            "created": "2018-03-08 15:00:03"
          },
          {
            "friendly_name": "Week day run",
            "duration": 456,
            "distance": 789,
            "created": "2018-03-06 15:00:03"
          }
        ]
      }
    );

    // THEN
    expect(state).toEqual({
      runs: [
        {
          "friendly_name": "Weekend Run",
          "duration": 370,
          "distance": 110,
          "created": "2018-03-08 15:00:03"
        },
        {
          "friendly_name": "Week day run",
          "duration": 456,
          "distance": 789,
          "created": "2018-03-06 15:00:03"
        }
      ]
    });
  });

  it('should handle FETCH_RUN_FAILED', () => {
    // WHEN
    const state = reducer(undefined, { type: 'FETCH_RUN_FAILED', error: 'Does\'t matter what has here' });

    // THEN
    expect(state).toEqual({
      errorMessage: 'Does\'t matter what has here'
    });
  });
});