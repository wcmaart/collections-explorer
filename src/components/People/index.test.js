import React from 'react';
import { shallow } from 'enzyme';
import People from './';

it('Test example', () => {
  const wrapper = shallow(<People />);
  expect(wrapper.is('ul')).toBeTruthy();
});