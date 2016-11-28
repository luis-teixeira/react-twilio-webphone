import expect from 'expect';
import callLogsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('callLogsReducer', () => {
  it('returns the initial state', () => {
    expect(callLogsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
