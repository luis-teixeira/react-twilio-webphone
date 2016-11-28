import { createSelector } from 'reselect';

/**
 * Direct selector to the callLogs state domain
 */
const selectCallLogsDomain = () => (state) => state.get('callLogs');


/**
 * Direct selector to the calls Object
 */
const selectCalls = () => createSelector(
  selectCallLogsDomain(),
  (calls) => calls.get('calls').data
);

/**
 * Default selector used by CallLogs
 */

const selectCallLogs = () => createSelector(
  selectCallLogsDomain(),
  (substate) => substate.toJS()
);

export default selectCallLogs;
export {
  selectCalls,
  selectCallLogsDomain,
};
