/*
 *
 * IncomeCall
 *
 */

/* global Twilio b:true */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import InOutCallHeader from 'components/InOutCallHeader';
import InOutCallBody from 'components/InOutCallBody';

import Button from 'components/Button';

/**
 *  Inject App Action:twilio Ready - to reset Phone App on Reject call is commited
 */
import {
  twAppReady,
} from 'containers/App/actions';

/**
 *  Inject DialPad Selector to Select the currenn number dialed
 */
import {
  selectCurrentNumber,
} from 'containers/DialPad/selectors';

export class InOutCall extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onAccept = () => {
    const { conn } = this.props;
    conn.accept();
  };

  onReject = () => {
    const { conn } = this.props;
    conn.reject();
    this.props.onTWAppReady();
  };

  onHangout() {
    Twilio.Device.disconnectAll();
  }

  render() {
    const { isIncomingCall, isMakingCall, callFrom, phoneNumber } = this.props;

    let content = (<div></div>);
    let numberToDisplay = <FormattedMessage {...messages.unknown} />;

    if (isIncomingCall) {
      numberToDisplay = callFrom;
      content = (
        <div>
          <FormattedMessage {...messages.callingIn} values={{ break: <br /> }} />
          <div className="buttons-wrapper">
            <Button success uppercase l onClick={this.onAccept}>
              <FormattedMessage {...messages.accept} />
            </Button>
            <Button error uppercase l onClick={this.onReject} >
              <FormattedMessage {...messages.hangout} />
            </Button>
          </div>
        </div>);
    }

    if (isMakingCall) {
      numberToDisplay = phoneNumber;
      content = (
        <div>
          <FormattedMessage {...messages.callingOut} values={{ break: <br /> }} />
          <div className="buttons-wrapper">
            <Button error uppercase l onClick={this.onHangout}>
              <FormattedMessage {...messages.hangout} />
            </Button>
          </div>
        </div>);
    }

    return (
      <Card fullHeight >
        <CardHeader success text="center" >
          <InOutCallHeader>{numberToDisplay}</InOutCallHeader>
        </CardHeader>
        <InOutCallBody avatar="http://lorempixel.com/100/100/people/" >
          {content}
        </InOutCallBody>

      </Card>
    );
  }
}

InOutCall.propTypes = {
  isIncomingCall: React.PropTypes.bool,
  isMakingCall: React.PropTypes.bool,
  onTWAppReady: React.PropTypes.func,
  conn: React.PropTypes.object,
  callFrom: React.PropTypes.string,
  phoneNumber: React.PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  phoneNumber: selectCurrentNumber(),
});


function mapDispatchToProps(dispatch) {
  return {
    onTWAppReady: () => dispatch(twAppReady()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InOutCall);
