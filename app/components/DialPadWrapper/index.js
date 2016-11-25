import React, { PropTypes, Children } from 'react';
import KeyWrapper from './KeyWrapper';
import Row from 'components/Row';

function DialPadWrapper(props) {
  return (
    <Row >
      <KeyWrapper>
        {Children.toArray(props.children)}
      </KeyWrapper>
    </Row>
  );
}

DialPadWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialPadWrapper;
