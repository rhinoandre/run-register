import React, { Component } from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import LoginForm from './containers/login';
import store from './store/';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <div className='app'>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <LoginForm />
          </div>
      </Provider>
    );
  }
}

export default App;
