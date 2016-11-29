/* global Twilio b:true */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import InOutCall from 'containers/InOutCall';
import MainNavBar from 'containers/MainNavBar';

import {
  getTWToken,
  twAppReady,
  twAppError,
  twAppConnect,
  twAppDisconnect,
  twAppIncoming,
  twAppCancel,
} from './actions';

import {
  selectTwilioConnected,
  selectTwilioCalling,
  selectTwilioIncomingFrom,
  selectTwilioIncoming,
} from './selectors';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.getTWToken();
    Twilio.Device.ready(() => { this.props.onTWAppReady(); });
    Twilio.Device.error((error) => this.props.onTWAppError(error));
    Twilio.Device.connect((conn) => this.props.onTWAppConnect(conn));
    Twilio.Device.disconnect((conn) => this.props.onTWAppDisconnect(conn));
    Twilio.Device.incoming((conn) => this.props.onTWAppIncoming(conn));
    Twilio.Device.cancel((conn) => this.props.onTWAppCancel(conn));
  }

  onReject() {
    this.props.onTWAppReady();
  }

  render() {
    const { isMakingCall, isIncomingCall } = this.props;
    return (
      <div>
        <MainNavBar />
        { (isMakingCall || isIncomingCall) && (<InOutCall {...this.props} />) }
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  isMakingCall: React.PropTypes.bool,
  isIncomingCall: React.PropTypes.bool,
  getTWToken: React.PropTypes.func,
  onTWAppReady: React.PropTypes.func,
  onTWAppError: React.PropTypes.func,
  onTWAppDisconnect: React.PropTypes.func,
  onTWAppConnect: React.PropTypes.func,
  onTWAppIncoming: React.PropTypes.func,
  onTWAppCancel: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isMakingCall: selectTwilioConnected(),
  isIncomingCall: selectTwilioCalling(),
  callFrom: selectTwilioIncomingFrom(),
  conn: selectTwilioIncoming(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTWToken: () => dispatch(getTWToken()),
    onTWAppReady: () => dispatch(twAppReady()),
    onTWAppError: () => dispatch(twAppError()),
    onTWAppConnect: () => dispatch(twAppConnect()),
    onTWAppDisconnect: () => dispatch(twAppDisconnect()),
    onTWAppIncoming: (conn) => dispatch(twAppIncoming(conn)),
    onTWAppCancel: (conn) => dispatch(twAppCancel(conn)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
