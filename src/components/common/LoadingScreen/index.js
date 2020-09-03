import React from 'react';
import {
  LoadingWrapper,
  Loading
} from './styled';

const LoadingScreen = () => {
  return(
    <LoadingWrapper>
      <Loading>LOADING...</Loading>
    </LoadingWrapper>
  );
}

export default LoadingScreen;