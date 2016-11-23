/*
 * DialPad
 *
 * This is the first thing users see of our App, at the '/' route
 */
/* global Twilio b:true */


import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import messages from './messages';

import Button from 'components/Button';

/**
 * to be deleted
 *
 */
const InputWarper = styled.div`
 text-align: center;
 input {
    display: block;
    border: 1px solid #41addd;
    margin: 0 auto;
    padding: 0.25em 2em;
 }
`;

export class DialPad extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = { value: '+351932555526' };
    this.handleChange = this.handleChange.bind(this);
  }
  // componentDidMount() {}

  onTestCall = () => {
    Twilio.Device.connect({ To: this.state.value });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <InputWarper>
          <form >
            <input type="text" placeholder="+16175551212" value={this.state.value} onChange={this.handleChange} />
            Phone numbers should be formatted with a + and country code e.g., +16175551212 (E.164 format).
          </form>
        </InputWarper>
        <Button onClick={this.onTestCall} >Testing call</Button>
      </div>
    );
  }
}

// DialPad.propTypes = {};

// const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DialPad);
