import React from 'react';
import {
  UpdateForm,
  Wrapper,
  Info, 
  UpdateButton

} from './styled';

const UserInfo = (props) => {
  const {username, email, bio} = props.data
  return(
    
    <Wrapper>
      <UpdateForm>
        <div>
          <h1 style={{color: 'var(--MainColor)'}}>User informaiton</h1>
        </div>
        <Info>
          <input type='text' placeholder='URL of your picture'/>
          <input type='text' value={username}/>
          <textarea type='text'value={bio}/>
          <input type='email' placeholder='Your Email' value={email}/>
          <input type='password' placeholder='New Password'/>
          <UpdateButton>UPDATE</UpdateButton>
        </Info>
      </UpdateForm>
    </Wrapper>
  )
};

export default UserInfo;