import {
  GET_TW_TOKEN,
  GET_TW_TOKEN_SUCCESS,
  GET_TW_TOKEN_ERROR,
  TW_APP_READY,
  TW_APP_ERROR,
  TW_APP_CONNECT,
  TW_APP_DISCONNECT,
  TW_APP_INCOMING,
  TW_APP_CANCEL,
} from './constants';


/**
 * Get Token from TWILIO to Initialize Twilio.Device
 *
 * @return {object} An action object with a type of GET_TW_TOKEN
 */
export function getTWToken() {
  return {
    type: GET_TW_TOKEN,
  };
}

/**
 * Dispatched when the token are loaded by the request saga
 *
 * @param  {object} response form Twilio
 *
 * @return {object} An action object with a type of GET_TW_TOKEN_SUCCESS passing the response
 */
export function getTWTokenSuccess(response) {
  return {
    type: GET_TW_TOKEN_SUCCESS,
    response,
  };
}

/**
 * Dispatched when get token fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_TW_TOKEN_ERROR passing the error
 */
export function getTWTokenError(error) {
  return {
    type: GET_TW_TOKEN_ERROR,
    error,
  };
}
/**
 * Dispatched when Twilio.device.ready
 *
 * @return An action type of TW_APP_READY
 */
export function twAppReady() {
  return {
    type: TW_APP_READY,
  };
}

/**
 * Dispatched when Twilio.device.error
 *
 * @return An action type of TW_APP_ERROR
 */
export function twAppError(error) {
  return {
    type: TW_APP_ERROR,
    error,
  };
}

/**
 * Dispatched when Twilio.devide.connect
 *
 * @return An action type of TW_APP_CONNECT
 */
export function twAppConnect(conn) {
  return {
    type: TW_APP_CONNECT,
    conn,
  };
}

/**
 * Dispatched when Twilio.devide.disconnect
 *
 * @return An action type of TW_APP_DISCONNECT
 */
export function twAppDisconnect(conn) {
  return {
    type: TW_APP_DISCONNECT,
    conn,
  };
}

/**
 * Dispatched when Twilio.devide.disconnect
 *
 * @return An action type of TW_APP_DISCONNECT
 */
export function twAppIncoming(conn) {
  return {
    type: TW_APP_INCOMING,
    conn,
  };
}

/**
 * Dispatched when Twilio.devide.cancel
 *
 * @return An action type of TW_APP_CANCEL
 */
export function twAppCancel(conn) {
  return {
    type: TW_APP_CANCEL,
    conn,
  };
}
