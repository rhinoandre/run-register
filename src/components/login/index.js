import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import formSerialize from 'form-serialize';

class LoginForm extends Component {
  doLogin(event) {
    event.preventDefault();
    const loginData = formSerialize(event.target, { hash: true });
    this.props.doLogin(loginData);
  }

  render() {
    return (
      <form onSubmit={this.doLogin.bind(this)}>
        <TextField label='Email' fullWidth={true} name='email' type='email' />
        <TextField label='Password' fullWidth={true} name='passwd' type='password' />
        <Button variant='contained' color='secondary'>Cancel</Button>
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
