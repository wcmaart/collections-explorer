import React from 'react';
import { shallow } from 'enzyme';
import Home from './';

it('Test home page', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.is('section')).toBeTruthy();
});
