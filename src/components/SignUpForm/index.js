import React from "react";
import {Link} from 'react-router-dom';
import PrimaryButton from '../common/Button'
import {
  Wrapper,
  Title,
  HeaderContent
} from './styled';

const SignUp = (props) => {
  const {
    userNameValue, 
    handleUserNameChange, 
    emailVaue, 
    handleEmailChange, 
    passwordValue, 
    handlePasswordChange,
    handleRegister
  } = props
  return(
    <Wrapper>
      <div>
        <input 
            type='text' 
            placeholder='User Name' 
            value={userNameValue} 
            onChange={handleUserNameChange} 
          />
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
        <PrimaryButton Clicked={handleRegister} buttonName='Regsister'/>
      </div>
      <HeaderContent>
        <Title>Already has account ?</Title>
        <Link to='/sign-in'>Back to Login</Link>
      </HeaderContent>
    </Wrapper>
  )
};

export default SignUp;
