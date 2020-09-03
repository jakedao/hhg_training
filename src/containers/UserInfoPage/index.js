import React, {useEffect, useState} from 'react';
import {UserInfo} from '../../components';
import AuthService from '../../services/auth-service';

const UserInfoPage = (props) => {

  let [info, getInfo] = useState(null);

  useEffect(() => {
    getUserInfo()
  },[]);
  
  const getUserInfo = () => {
    let temp = AuthService.getCurrentUser();
    if(!temp){
      return props.history.push('/sign-in');
    }
    getInfo(temp.user);
  }

  return(
    info && <UserInfo data={info}/>
  )
}

export default UserInfoPage;