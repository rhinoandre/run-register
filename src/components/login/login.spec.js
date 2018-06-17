import React from 'react';
import { shallow, mount } from 'enzyme';

import LoginForm from './';

describe('Login Form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<LoginForm />);
  });
  
  it('should have the component', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });
  
  it('should have an Email field', () => {
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
  });
  
  it('should have an password field named passwd', () => {
    expect(wrapper.find('input[name="passwd"]').exists()).toBe(true);
  });
});