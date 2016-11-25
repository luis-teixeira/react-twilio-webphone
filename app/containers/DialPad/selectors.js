import { createSelector } from 'reselect';

/**
 * Direct selector to the dialPad state domain
 */
const selectDialPadDomain = () => (state) => state.get('dialPad');


/**
 * Default selector used by DialPad
 */

const selectShowDialPadState = () => createSelector(
  selectDialPadDomain(),
  (showDialPadState) => showDialPadState.get('show')
);

const selectCurrentNumber = () => createSelector(
  selectDialPadDomain(),
  (getNumberState) => getNumberState.get('phoneNumber')
);

// export default selectDialPad;
export {
  selectDialPadDomain,
  selectShowDialPadState,
  selectCurrentNumber,
};
