import React,{useState, userEffect, useEffect} from 'react';
import {SignInForm} from '../../components';
import {instance, URI} from '../../api';
import axios from 'axios';
import AutherService from '../../services/auth-service'

const SignInPage = (props) => {

  let [email, setEmail] = useState();
  let [pass, setPassword] = useState();

  useEffect(() => {
    console.log(props)
  })
  const handleUserName = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    if(!email || !pass) {
      return alert('Please input email / password')
    }
    let result = await AutherService.login(email, pass);
    result.user && props.history.push('/user-info');
  }

  return (
    <SignInForm 
      emailValue={email}
      handleEmailChange={handleUserName}
      passwordValue={pass}
      handlePasswordChange={handlePassword}
      handleSignIn={handleLogin}
    />
  )
};

export default SignInPage;