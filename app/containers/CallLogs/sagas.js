import { take, call, put, fork } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_TW_CALLS_LIST } from './constants';
import { getCallsListSuccess, getCallsListError } from './actions';

/**
 * Get Call List
 */
export function* getCallsList() {
  const requestURL = '/twilio/calls/list';
  // Call our request helper (see 'utils/request')
  const calls = yield call(request, requestURL);

  if (!calls.error) {
    yield put(getCallsListSuccess(calls));
  } else {
    yield put(getCallsListError(calls.error));
  }
}

/**
 * Watches for GET_TW_CALLS_LIST action and calls handler
 */
export function* getGetCallsListWatcher() {
  while (yield take(GET_TW_CALLS_LIST)) {
    yield call(getCallsList);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* callLogsData() {
  yield fork(getGetCallsListWatcher);
}

// Bootstrap sagas
export default [
  callLogsData,
];
