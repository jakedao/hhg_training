import React from 'react';
import Wrapper from './styled';

const PrimaryButton = (props) => {
  return(
    <Wrapper onClick={props.Clicked}>{props.buttonName}</Wrapper>
  )
}; 

export default PrimaryButton;