/**
*
* CardBody
*
*/

import React, { PropTypes, Children } from 'react';

import StyledCardBody from './StyledCardBody';


function CardBody(props) {
  return (
    <StyledCardBody {...props} >
      {Children.toArray(props.children)}
    </StyledCardBody>
  );
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardBody;
