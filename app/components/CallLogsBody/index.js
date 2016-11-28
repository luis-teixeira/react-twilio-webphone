/**
*
* CallLogsBody
*
*/

import React, { PropTypes, Children } from 'react';

import StyledCallLogsBody from './StyledCallLogsBody';


function CallLogsBody(props) {
  return (
    <StyledCallLogsBody>
      {Children.toArray(props.children)}
    </StyledCallLogsBody>
  );
}

CallLogsBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CallLogsBody;
