import React from 'react';
import { Route, Switch } from 'react-router';

import LoginForm from '../containers/login';
import RunList from '../containers/run-list';
import PrivateRouter from '../containers/private-router';

const Routes = (
  <div>
    <Switch>
      <PrivateRouter exact path='/' component={ RunList } />
      <Route path='/login' component={ LoginForm } />
    </Switch>
  </div>
);

export default Routes;
