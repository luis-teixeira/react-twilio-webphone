/*
 * DialPad
 *
 * This is the first thing users see of our App, at the '/' route
 */
/* global Twilio b:true */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Icon } from 'semantic-ui-react';

import Button from 'components/Button';
import Card from 'components/Card';
import DialPadWrapper from 'components/DialPadWrapper';
import DialPadKey from 'components/DialPadKey';
import DialPadInput from 'components/DialPadInput';
import Loading from 'components/Loading';
import Info from './Info';

import keysConfig from './config';

import {
  addDigit,
  removeDigit,
} from './actions';

import {
  selectCurrentNumber,
} from './selectors';

import {
  selectTwilioReady,
} from '../App/selectors';


export class DialPad extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  /**
   * DialPadKey Click Handler
   * @param {Event} e - button event
   */
  onDialButtonClick = (event) => {
    const { value } = event.currentTarget;
    this.props.onDialButton(value);
  };


  /**
   * Delete Button click Handler
   */
  onDeleteNumber = () => {
    this.props.onDeleteButton();
  };

  /**
   * Call Button Click Handler
   */
  onCall = () => {
    const { phoneNumber } = this.props;
    if (+phoneNumber.length >= 5) {
      const params = {
        To: +phoneNumber,
      };
      Twilio.Device.connect(params);
    }
  };

  /**
   * onDialKeyPressed Click Handler
   * @param {Event} e - key pressed event
   */
  handleKeyDown = (event) => {
    const acceptedKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '#'];
    const { key } = event;
    if (acceptedKey.indexOf(key) > -1) {
      this.props.onDialButton(key);
    }
    if (key === 'Backspace') {
      this.props.onDeleteButton();
    }
  };

  render() {
    const { isTwilioReady, phoneNumber } = this.props;
    return (
      <div>
        { !isTwilioReady && (<Loading />) }
        { isTwilioReady && (
        <Card>
          <DialPadInput number={phoneNumber} onDelete={this.onDeleteNumber} />
          <DialPadWrapper>
            { keysConfig.map((key) =>
              <DialPadKey key={key.value} onClick={this.onDialButtonClick} value={key.value} alias={key.alias} />
            )}
          </DialPadWrapper>
          <Button onClick={this.onCall} success block xl >
            <Icon name="call" inverted />
          </Button>
          <Info>
            <FormattedMessage {...messages.info} />
          </Info>
        </Card>
        )}
      </div>
    );
  }
}

DialPad.propTypes = {
  phoneNumber: React.PropTypes.string,
  onDialButton: React.PropTypes.func,
  onDeleteButton: React.PropTypes.func,
  isTwilioReady: React.PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  phoneNumber: selectCurrentNumber(),
  isTwilioReady: selectTwilioReady(),
});

function mapDispatchToProps(dispatch) {
  return {
    onDialButton: (n) => dispatch(addDigit(n)),
    onDeleteButton: () => dispatch(removeDigit()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DialPad);
