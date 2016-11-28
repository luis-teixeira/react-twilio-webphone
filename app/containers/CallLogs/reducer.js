/*
 *
 * CallLogs reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_TW_CALLS_LIST,
  GET_TW_CALLS_LIST_SUCCESS,
  GET_TW_CALLS_LIST_ERROR,
} from './constants';

const initialState = fromJS({
  loading: null,
  error: null,
  calls: { data: null },
});

function callLogsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TW_CALLS_LIST:
      return state
        .set('loading', true)
        .set('error', false);
    case GET_TW_CALLS_LIST_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('calls', action.response);
    case GET_TW_CALLS_LIST_ERROR:
      return state
        .set('loading', false)
        .set('error', true)
        .set('calls', action.error);
    default:
      return state;
  }
}

export default callLogsReducer;
