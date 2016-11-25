import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('phone');

// SELECT token
const selectTwilioToken = () => createSelector(
  selectGlobal(),
  (twilioTokenState) => twilioTokenState.get('token')
);

// SELECT Twilio is ready
const selectTwilioReady = () => createSelector(
  selectGlobal(),
  (twilioReadyState) => twilioReadyState.get('ready')
);

// // SELECT Twilio is connect
// const selectTwilioConnected = () => createSelector(
//   selectGlobal(),
//   (twilioConnectState) => twilioConnectState.get('connect')
// );
//
// // SELECT Twilio is IncomeCall
// const selectTwilioIncoming = () => createSelector(
//   selectGlobal(),
//   (twilioIncomingState) => twilioIncomingState.get('conn')
// );
//
// // SELECT Twilio is calling
// const selectTwilioCalling = () => createSelector(
//   selectGlobal(),
//   (twilioCallingState) => twilioCallingState.get('calling')
// );
//
// // SELECT Twilio identity
// const selectTwilioIdentity = () => createSelector(
//   selectGlobal(),
//   (twilioIdentityState) => twilioIdentityState.get('identity')
// );
//
// // SELECT Twilio incoming from
// const selectTwilioIncomingFrom = () => createSelector(
//   selectGlobal(),
//   (twilioIncomingFromState) => twilioIncomingFromState.get('From')
// );

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  // selectLoading,
  selectTwilioToken,
  selectTwilioReady,
  // selectTwilioIncoming,
  // selectTwilioConnected,
  selectLocationState,
  // selectTwilioCalling,
  // selectTwilioIdentity,
  // selectTwilioIncomingFrom,
};
