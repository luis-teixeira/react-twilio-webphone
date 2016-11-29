/*
 *
 * MainNavBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';
import messages from './messages';

import { Icon } from 'semantic-ui-react';

import NavBar from 'components/NavBar';
import Button from 'components/Button';

export class MainNavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/' - KeyPad
   */
  openKeyPadPage = () => {
    this.openRoute('/');
  };

  /**
   * Changed route to '/call-logs'
   */
  openLogsPage = () => {
    this.openRoute('/call-logs');
  };

  /**
   * Changed route to '/options'
   */
  openOptionPage = () => {
    this.openRoute('/options');
  };

  render() {
    return (
      <NavBar>
        <Button handleRoute={this.openKeyPadPage} >
          <Icon name="grid layout" inverted />
          <div><small><FormattedMessage {...messages.dialPad} /></small></div>
        </Button>
        <Button handleRoute={this.openLogsPage} >
          <Icon name="newspaper" inverted />
          <div><small><FormattedMessage {...messages.callLogs} /></small></div>
        </Button>
        <Button handleRoute={this.openOptionPage} >
          <Icon name="options" inverted />
          <div><small><FormattedMessage {...messages.options} /></small></div>
        </Button>
      </NavBar>
    );
  }
}

MainNavBar.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(MainNavBar);
