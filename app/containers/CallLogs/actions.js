/*
 *
 * CallLogs actions
 *
 */

import {
  GET_TW_CALLS_LIST,
  GET_TW_CALLS_LIST_SUCCESS,
  GET_TW_CALLS_LIST_ERROR,
} from './constants';

/**
 * Get Calls List from TWILIO API
 *
 * @return {object} An action object with a type of GET_TW_TOKEN
 */
export function getCallsList() {
  return {
    type: GET_TW_CALLS_LIST,
  };
}

/**
 * Dispatched when Calls List is loaded
 *
 * @param  {object} response form Twilio
 *
 * @return {object} An action object with a type of GET_TW_CALLS_LIST_SUCCESS passing the response
 */
export function getCallsListSuccess(response) {
  return {
    type: GET_TW_CALLS_LIST_SUCCESS,
    response,
  };
}

/**
 * Dispatched when get Calls List failds
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_TW_CALLS_LIST_ERROR passing the error
 */
export function getCallsListError(error) {
  return {
    type: GET_TW_CALLS_LIST_ERROR,
    error,
  };
}

