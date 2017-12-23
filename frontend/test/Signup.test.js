import React from 'react';
import SignupForm from '../src/Signup';
import { wrap } from 'module';

describe('<SignupForm>', () => {
  it('must have a name input', () => {
    const wrapper = mount(<SignupForm />);
    expect(wrapper.find('input[name="name"]').length).toEqual(1);
  });

  it('name must be a text input', () => {
    const wrapper = mount(<SignupForm />);
    expect(wrapper.find('input[name="name"]').prop('type')).toEqual('text');
  })

  it('must have a email input', () => {
    const wrapper = mount(<SignupForm />);
    expect(wrapper.find('input[name="email"]').length).toEqual(1);
  })

  it('email must be a email input', () => {
    const wrapper = mount(<SignupForm />);
    expect(wrapper.find('input[name="email"]').prop('type')).toEqual('email');
  })

  it('must have a password input', () => {
    const wrapper = mount(<SignupForm />);
    expect(wrapper.find('input[name="password"]').length).toEqual(1);
  })

  it('password must be a password input', () => {
    const wrapper = mount(<SignupForm />);
    expect(wrapper.find('input[name="password"]').prop('type')).toEqual('password');
  })

  it('must have a agreement input', () => {
    const wrapper = mount(<SignupForm />);
    expect(wrapper.find('input[name="agreement"]').length).toEqual(1);
  })

  it('agreement must be a checkbox input', () => {
    const wrapper = mount(<SignupForm />);
    expect(wrapper.find('input[name="agreement"]').prop('type')).toEqual('checkbox');
  })

  it('must have only a button', () => {
    const wrapper = mount(<SignupForm />);
    expect(wrapper.find('button').length).toEqual(1);
  })

  it('renders SignupForm without crashing', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper).toMatchSnapshot();
  })
})