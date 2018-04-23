import React from 'react';
import { shallow } from 'enzyme';
import Header from './';

it('Test example', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.is('section')).toBeTruthy();
});
