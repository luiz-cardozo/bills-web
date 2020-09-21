import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" isPrivate component={Dashboard} />
    <Route path="/transactions" isPrivate component={Transactions} />
  </Switch>
);

export default Routes;
