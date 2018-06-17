import React from 'react';
import { Route, Redirect } from 'react-router';

function PrivateRouter({ component: Component, ...privateRouterProps }) {
  return (
    <Route {...privateRouterProps} render={(props) => {
      return privateRouterProps.login.isAuthenticated
        ? <Component {...props} />
        : <Redirect to='/login' />
    }} />
  )
}

export default PrivateRouter;
