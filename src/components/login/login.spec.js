import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import LoginForm from './';

describe('Login Form fields', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<LoginForm doLogin={() => ({})} />);
  });

  it('should have the component', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('should have an Email field', () => {
    expect(wrapper.find('input[name="email"]').length).toBe(1);
  });

  it('should have a password field named passwd', () => {
    expect(wrapper.find('input[name="passwd"]').length).toBe(1);
  });

  it('should have a submit button', () => {
    expect(wrapper.find('button[type="submit"]').length).toBe(1);
  });
});

describe('Login Form Actions', () => {
  it('should log in using the fields', () => {
    // GIVEN
    const doLogin = jasmine.createSpy('doLogin');
    const wrapper = mount(<LoginForm doLogin={doLogin} />);

    // AND
    wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'rhinoandre@gmail.com' }});
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'passwd', value: '123456' }});

    // WHEN
    wrapper.find('button[type="submit"]').simulate('submit');

    // THEN
    expect(wrapper.instance().loginData).toEqual({ email: 'rhinoandre@gmail.com', passwd: '123456' });

    // AND
    expect(doLogin).toHaveBeenCalledWith(jasmine.any(Object));
  });

  it('should redirect to the main route when its already authenticated', () => {
    // GIVEN
    const doLogin = jasmine.createSpy('doLogin');
    
    // WHEN
    const wrapper = mount(
      <MemoryRouter>
        <LoginForm doLogin={doLogin} isAuthenticated={true} />
      </MemoryRouter>
    );

    // THEN
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });
})