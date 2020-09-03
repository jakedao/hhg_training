import React,{useState} from 'react';

import {SignUpForm} from '../../components';
import AuthService from '../../services/auth-service'

const SignUpPage = (props) => {

  const handleSignUp = async () => {
    if(!email || !pass || !username) {
      return alert('Please complete your Registration Form')
    }
    let temp = await AuthService.register(email, username, pass);
    temp.user && props.history.push('/sign-in')
  }

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  return (
    <SignUpForm 
      userNameValue={username}
      handleUserNameChange={e => setUsername(e.target.value)}
      emailValue={email}
      handleEmailChange={e => setEmail(e.target.value)}
      passwordValue={pass}
      handlePasswordChange={e => setPass(e.target.value)}
      handleRegister={handleSignUp}
    />
  )
};

export default SignUpPage;