import React from 'react';
import { Route, Redirect } from 'react-router';

function PrivateRouter({ component: Component, ...privateRouterProps }) {
  return (
    <Route {...privateRouterProps} render={(props) => {
      return privateRouterProps.isAuthenticated
        ? <Component {...props} />
        : <Redirect to='/login' />
    }} />
  )
}

export default PrivateRouter;
