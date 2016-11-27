/**
*
* CardHeader
*
*/

import React, { PropTypes, Children } from 'react';

import StyledCardHeader from './StyledCardHeader';

function CardHeader(props) {
  return (
    <StyledCardHeader {...props} >
      {Children.toArray(props.children)}
    </StyledCardHeader>
  );
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardHeader;
