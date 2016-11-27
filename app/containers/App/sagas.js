/* global Twilio b:true */

import { take, call, select, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_TW_TOKEN, GET_TW_TOKEN_SUCCESS } from './constants';
import { getTWTokenError, getTWTokenSuccess } from './actions';
import { selectTwilioToken } from './selectors';

import request from 'utils/request';


/**
 * Token Twilio
 */
export function* getTWTokenCall() {
  const requestURL = '/twilio/token';
  // Call our request helper (see 'utils/request')

  const token = yield call(request, requestURL);

  if (!token.err) {
    yield put(getTWTokenSuccess(token));
  } else {
    yield put(getTWTokenError(token.error));
  }
}

/**
 * Watches for GET_TW_TOKEN action and calls handler
 */
export function* getTWTokenWatcher() {
  while (yield take(GET_TW_TOKEN)) {
    yield call(getTWTokenCall);
  }
}

/**
 * Watches for GET_TW_TOKEN_SUCCESS action and calls handler
 */
export function* initTwilioDevice() {
  while (yield take(GET_TW_TOKEN_SUCCESS)) {
    const token = yield select(selectTwilioToken());
    Twilio.Device.setup(token);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* globalData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getTWTokenWatcher);
  const watcherSuccess = yield fork(initTwilioDevice);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(watcherSuccess);
}

// Bootstrap sagas
export default [
  globalData,
];
