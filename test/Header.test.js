import React from 'react';
import Header from '../src/components/Header';
import { WSAEPROVIDERFAILEDINIT } from 'constants';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    const brand = <img />
    const wrapper = <Header brand={brand}/>
    expect(wrapper).toMatchSnapshot();
  })
})