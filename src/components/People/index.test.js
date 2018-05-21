import React from 'react';
import { shallow } from 'enzyme';
import People from './';

it('Test People Page', () => {
  const wrapper = shallow(<People />);
  expect(wrapper.is('div')).toBeTruthy();
});
