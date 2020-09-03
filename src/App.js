import React from 'react';
import { Home, Header } from './components';
import { Articles, SignInPage, SignUpPage, UserInfoPage } from './containers'
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/sign-in' exact component={SignInPage}/>  
        <Route path='/sign-up' exact component={SignUpPage} />  
        <Route path='/articles' exact component={Articles} />
        <Route path='/user-info' component={UserInfoPage} />
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  )
}

export default App;
