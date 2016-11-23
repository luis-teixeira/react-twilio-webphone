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

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  calling: false,
  error: false,
  ready: false,
  connect: false,
  conn: null,
  From: null,
  token: null,
  identity: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TW_TOKEN:
      return state
        .set('loading', true)
        .set('error', false);
    case GET_TW_TOKEN_SUCCESS:
      return state
        .set('loading', false)
        .set('identity', action.response.data.identity)
        .set('token', action.response.data.token);
    case GET_TW_TOKEN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case TW_APP_READY:
      return state
        .set('ready', true)
        .set('connect', false)
        .set('calling', false);
    case TW_APP_ERROR:
      return state
        .set('ready', true)
        .set('error', action.error);
    case TW_APP_INCOMING:
      return state
        .set('connect', false)
        .set('calling', true)
        .set('From', action.conn.parameters.From)
        .set('conn', action.conn);
    case TW_APP_CANCEL:
      return state
        .set('connect', false)
        .set('calling', false)
        .set('conn', action.conn);
    case TW_APP_CONNECT:
      return state
        .set('connect', true)
        .set('calling', false)
        .set('conn', action.conn);
    case TW_APP_DISCONNECT:
      return state
        .set('connect', false)
        .set('calling', false)
        .set('conn', action.conn);
    default:
      return state;
  }
}

export default appReducer;
