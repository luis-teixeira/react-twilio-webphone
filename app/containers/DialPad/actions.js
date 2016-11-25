/*
 *
 * DialPad actions
 *
 */

import {
  ADD_DIGIT,
  REMOVE_DIGIT,
} from './constants';

/**
 *
 * @param number
 * @return {{type, number: *}}
 */
export function addDigit(n) {
  return {
    type: ADD_DIGIT,
    number: n,
  };
}
/**
 *
 * @return {{type}}
 */
export function removeDigit() {
  return {
    type: REMOVE_DIGIT,
  };
}
