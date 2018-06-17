import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';

import './App.css';
import router from './routes/';

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      { router }
    </ConnectedRouter>
  );
}

App.propsType = {
  history: PropTypes.object.isRequired
};

export default App;
