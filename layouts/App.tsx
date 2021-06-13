import React from 'react';
import loadable from '@loadable/component'
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Profile = loadable(() => import('@pages/Profile'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/main"></Redirect>
      <Route exact path="/main" component={Main} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  )
}

export default App;
