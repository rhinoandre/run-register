import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import LoginForm from '../containers/login';
import RunList from '../containers/run-list';
import PrivateRouter from '../containers/private-router';

const Routes = (
  <div>
    <Switch>
      <PrivateRouter path='/runs' component={ RunList } />
      <Route path='/login' component={ LoginForm } />
      <Redirect to='/runs' />
    </Switch>
  </div>
);

export default Routes;
