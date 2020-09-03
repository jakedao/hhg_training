import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import {
  Wrapper,
  MenuItem,
  Menu
} from './styled'

import AuthService from '../../services/auth-service';

const Header = (props) => {

  const [isLoggedIn, setLogin] = useState();

  useEffect(() => {
    checkingHeader();
    console.log('Checking logged in everytime',isLoggedIn)
  },[])

  const checkingHeader = () => {
    let temp = AuthService.isLoggedIn();
    setLogin(temp);
  }
const handleLogOut = () => {
  AuthService.logOut();
  if(isLoggedIn){
    props.history.push("sign-in");
    setLogin(false);
  }
} 
  return (
    <Wrapper>
      <div>
        <div>Logo</div>
      </div>
      <Menu>
        <MenuItem to='/articles'>Articles</MenuItem>
        <MenuItem to='/user-info'>User Info</MenuItem>
        {isLoggedIn
          ? <MenuItem onClick={handleLogOut}>Log Out</MenuItem> 
          : <MenuItem to='/sign-in'>Log In</MenuItem>}  
      </Menu>
    </Wrapper>
  );
};

export default withRouter(Header);