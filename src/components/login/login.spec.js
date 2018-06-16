import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';

import LoginForm from './';

describe('Login', () => {
  it('should have the component', () => {
    const component = enzyme.shallow(<LoginForm />);
    expect(component).to.be.null;
  });
});