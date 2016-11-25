/**
*
* Loading
*
*/

import React from 'react';

import LoadingWrapper from './LoadingWrapper';

function Loading() {
  return (
    <LoadingWrapper>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </LoadingWrapper>
  );
}

export default Loading;
