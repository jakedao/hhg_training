import React from 'react';
import {Link} from 'react-router-dom';

import PrimaryButton from '../common/Button'
import {
  HeaderContent,
  Wrapper, 
  Title
} from './styled';

const SignIn = (props) => {
  const {
    emailVaue,
    handleEmailChange,
    passwordValue,
    handlePasswordChange,
    handleSignIn
  } = props;
  return(
    <Wrapper>
      <div>
        <input 
          type='email' 
          placeholder='Your Email' 
          value={emailVaue} 
          onChange={handleEmailChange} 
        />
        <input 
          type='password' 
          placeholder='Password' 
          value={passwordValue} 
          onChange={handlePasswordChange} />
        <PrimaryButton Clicked={handleSignIn} buttonName='Sign In'/>
      </div>
      <HeaderContent>
        <Title>You are new here ?</Title>
        <Link to='/sign-up'>Need An Account</Link>
      </HeaderContent>
    </Wrapper>
  )
};

export default SignIn;