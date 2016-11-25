/*
 *
 * DialPad reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_DIGIT,
  REMOVE_DIGIT,
} from './constants';

const initialState = fromJS({
  phoneNumber: '',
});

function dialPadReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DIGIT:
      return state
      .set('phoneNumber', state.get('phoneNumber').concat(action.number));
    case REMOVE_DIGIT:
      return state
      .set('phoneNumber', state.get('phoneNumber').slice(0, -1));
    default:
      return state;
  }
}

export default dialPadReducer;
