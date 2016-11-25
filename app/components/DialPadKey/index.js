/**
*
* DialPadKey
*
*/

import React, { PropTypes } from 'react';
import Button from './Button';
import Value from './Value';
import Alias from './Alias';
import FlexKey from './FlexKey';

function DialPadKey(props) { // eslint-disable-line react/prefer-stateless-function
  const button = (
    <Button onClick={props.onClick} value={props.value} >
      {/* {Children.toArray(props.children)} */}
      <Value>{props.value}</Value>
      {props.alias && (
        <Alias>{props.alias}</Alias>
      )}
    </Button>
  );

  return (
    <FlexKey >
      {button}
    </FlexKey>
  );
}

DialPadKey.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  alias: PropTypes.string,
};

export default DialPadKey;
