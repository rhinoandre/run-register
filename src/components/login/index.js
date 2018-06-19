import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Redirect } from 'react-router';

class LoginForm extends Component {
  loginData;

  constructor() {
    super();
    this.loginData = {};
  }

  onFieldChange({ target }) {
    this.loginData[target.name] = target.value
  }

  render() {
    if (this.props.isAuthenticated) {
      return (<Redirect to='/' />);
    }

    return (
      <form onSubmit={this.props.doLogin.bind(this)}>
        <TextField onChange={this.onFieldChange.bind(this)} label='Email' fullWidth={true} name='email' type='email' />
        <TextField onChange={this.onFieldChange.bind(this)} label='Password' fullWidth={true} name='passwd' type='password' />
        <Button
          type='submit'
          color='primary'
          variant='contained'>Login</Button>
          <span>{this.props.errorMessage}</span>
      </form>
    );
  }
}

export default LoginForm;
