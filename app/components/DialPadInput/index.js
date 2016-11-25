/**
*
* DialPadInput
*
*/

import React, { PropTypes } from 'react';
import DialInputWrapper from './DialInputWrapper';
import Button from 'components/Button';
import { Icon } from 'semantic-ui-react';

function DialPadInput(props) {
  return (
    <DialInputWrapper>
      { props.number && (
        <Button >
          <Icon name="angle right" />
        </Button>
      )}
      <input value={props.number} readOnly />
      { props.number && (
        <Button >
          <Icon name="remove circle" onClick={props.onDelete} />
        </Button>
      )}
    </DialInputWrapper>
  );
}

DialPadInput.propTypes = {
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default DialPadInput;
