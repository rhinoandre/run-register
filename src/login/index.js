import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

class LoginForm extends Component {
  render() {
    return (
      <form>
        {this.props.testingRedux}
        <TextField label='Email' fullWidth='true' name='email' type='email' />
        <TextField label='Password' fullWidth='true' name='passwd' type='password' />
        <Button variant='contained' color='secondary'>Cancel</Button>
        <Button variant='contained' color='primary'>Save</Button>
      </form>
    );
  }
}

export default LoginForm;