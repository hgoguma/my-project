import React from 'react';
import loadable from '@loadable/component'
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));


const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/main"></Redirect>
      <Route exact path="/main" component={Main} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signUp" component={SignUp} />
    </Switch>
    
  )
}

export default App;
