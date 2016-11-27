
import React, { PropTypes, Children } from 'react';

import { Icon } from 'semantic-ui-react';

import StyledInOutCallBody from './StyledInOutCallBody';


function InOutCallBody(props) {
  const avatar = props.avatar ? (<img src={props.avatar} role="presentation" />) : (<Icon name="user" color="grey" />);

  return (
    <StyledInOutCallBody>
      <div className="avatar">
        {avatar}
      </div>
      {Children.toArray(props.children)}
    </StyledInOutCallBody>
  );
}

InOutCallBody.propTypes = {
  children: PropTypes.node.isRequired,
  avatar: PropTypes.string,
};

export default InOutCallBody;
