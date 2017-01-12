/*
 *
 * CallLogs
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Loading from 'components/Loading';
import Card from 'components/Card';
import CardBody from 'components/CardBody';
import OverFlowContent from 'components/OverFlowContent';
import CallLogsEntries from 'components/CallLogsEntries';

import {
  getCallsList,
} from './actions';

import {
  selectCalls,
} from './selectors';

export class CallLogs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onGetCallsList();
  }

  render() {
    let callsListContent = <Loading />;

    const { callsList } = this.props;

    if (callsList) {
      callsListContent = this.props.callsList.map((entry, index) => (
        <CallLogsEntries key={`item-${index}`} entry={entry} />
      ));
    }

    return (
      <Card>
        <CardBody>
          <h3 className="title"><strong><FormattedMessage {...messages.header} /></strong></h3>
          <OverFlowContent height="calc(100vh - 222px)">
            {callsListContent}
          </OverFlowContent>
        </CardBody>
      </Card>
    );
  }
}

CallLogs.propTypes = {
  callsList: React.PropTypes.array,
  onGetCallsList: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  callsList: selectCalls(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetCallsList: () => dispatch(getCallsList()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CallLogs);
