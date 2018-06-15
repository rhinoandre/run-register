import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import LoginForm from './login';

const initialState = {
  testingRedux: 'Who wants to go to Span?'
};

function reducer(state = initialState, action) {
  return state;
}

const store = createStore(reducer);

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
