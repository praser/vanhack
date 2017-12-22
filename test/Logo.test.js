import React from 'react';
import Logo from '../src/components/Logo';

describe('<Logo />', () => {
  it('renders a image with given src', () => {
    const src = 'any-image.svg';
    const wrapper = shallow(<Logo src={src} />);
    
    expect(wrapper.prop('src')).toEqual(src);
  });

  it('renders a image with given width', () => {
    const width = 100;
    const wrapper = shallow(<Logo width={width} />);

    expect(wrapper.prop('width')).toEqual(width);
  })

  it('renders a image with given height', () => {
    const height = 50;
    const wrapper = shallow(<Logo height={height} />);

    expect(wrapper.prop('height')).toEqual(height)
  })

  it('renders the <Logo> component without crashing', () => {
    const wrapper = shallow(<Logo src='any-image.svg' width={100} height={50} />);
    expect(wrapper).toMatchSnapshot();
  })
})