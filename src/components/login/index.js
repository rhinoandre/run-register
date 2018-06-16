import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

class LoginForm extends Component {
  async doLogin() {
    await this.props.doLogin();
  }

  render() {
    return (
      <form>
        {this.props.testingRedux}
        <TextField label='Email' fullWidth={true} name='email' type='email' />
        <TextField label='Password' fullWidth={true} name='passwd' type='password' />
        <Button variant='contained' color='secondary'>Cancel</Button>
        <Button
          color='primary'
          variant='contained'
          onClick={() => this.doLogin() }>Login</Button>
          <span>{this.props.errorMessage}</span>
      </form>
    );
  }
}

export default LoginForm;
