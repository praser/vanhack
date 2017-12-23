import React from 'react';
import Input from '../src/components/Input';

describe('<Input>', () => {
  it('must include an input with given type', () => {
    const type = 'password';
    const wrapper = shallow(<Input type={type} />).find('input');

    expect(wrapper.prop('type')).toEqual(type);
  });

  it('must include an input with given value', () => {
    const value = 'Some thing special';
    const wrapper = shallow(<Input value={value} />).find('input');

    expect(wrapper.prop('value')).toEqual(value);
  });

  it('must include and input with given name', () => {
    const name = 'myInput';
    const wrapper = shallow(<Input name={name} />).find('input');

    expect(wrapper.prop('name')).toEqual(name);
  });

  it('must include and input with given name', () => {
    const name = 'myInput';
    const wrapper = shallow(<Input name={name} />).find('input');

    expect(wrapper.prop('name')).toEqual(name);
  });

  it("must include a label related to input's name", () => {
    const wrapper = shallow(<Input name='myInput' />);
    expect(wrapper.find('label').prop('htmlFor')).toEqual(wrapper.find('input').prop('name'));
  });

  it('must include a label with given value', () => {
    const label = 'My Input';
    const wrapper = shallow(<Input label={label} />).find('label');

    expect(wrapper.text()).toEqual(label);
  })
});