/**
*
* CallLogsEntries
*
*/

import React from 'react';

import StyledCallLogsEntries from './StyledCallLogsEntries';

import { Icon } from 'semantic-ui-react';

const moment = require('moment/moment.js');
// import moment from 'moment/moment.js';

function CallLogsEntries(props) {
  const { entry } = props;
  const avatar = props.avatar ? <img src={props.avatar} role="presentation" /> : <Icon name="user" color="grey" />;

  const failed = (entry.status !== 'completed') ?
    <span className="faild"><Icon color="red" name="frown" /> {entry.status} </span> : <span></span>;

  const date = moment(entry.endTime).format('dddd, D MMM, h:mm');

  let content = '';
  if (entry.direction === 'inbound') {
    content = <div><Icon name="chevron down" /><strong>{entry.from}</strong><br />{date}</div>;
  } else {
    content = <div><Icon name="chevron up" /><strong>{entry.to}</strong><br />{date}</div>;
  }

  return (
    <StyledCallLogsEntries>
      <div className="avatar">
        {avatar}
      </div>
      <div className="log">
        {failed}
        {content}
      </div>
    </StyledCallLogsEntries>
  );
}

CallLogsEntries.propTypes = {
  entry: React.PropTypes.object,
  avatar: React.PropTypes.string,
};

export default CallLogsEntries;
