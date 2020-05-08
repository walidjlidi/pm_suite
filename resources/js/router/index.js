import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import ForgotPassword from '../pages/auth/forgot-password';
import ResetPassword from '../pages/auth/reset-password';
import NotFound from '../pages/404';
import Home from '../pages/home';
import Profile from '../pages/profile';
import AuthRoute from './auth-route';
import GuestRoute from './guest-route';
import { useAuth } from '../context/auth';
import FullPageSpinner from '../components/full-page-spinner';
import AddProject from "../components/projects/AddProject";

function App () {
  let { initializing } = useAuth();
  return (
    initializing
      ? <FullPageSpinner />
      : <Router>
          <Switch>
            <GuestRoute exact path="/" component={Welcome} title="welcome" />
            <GuestRoute path="/register" component={Register} title="register" />
            <GuestRoute path="/login" component={Login} title="login"/>
            <GuestRoute path="/forgot-password" component={ForgotPassword} title="forgot password"/>
            <GuestRoute path="/password/reset/:token" component={ResetPassword} title="reset password"/>
            <AuthRoute path="/home" component={Home} title="home"/>
            <AuthRoute path="/profile/:id" component={Profile} title="profile"/>
            <AuthRoute path="/project/add" component={AddProject} title="addProject" />
            <Route component={NotFound}/>
          </Switch>
      </Router>
  );
};

export default App;
