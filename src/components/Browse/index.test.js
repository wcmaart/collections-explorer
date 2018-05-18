import React from 'react';
import { shallow } from 'enzyme';
import Browse from './';

it('Test example', () => {
  const wrapper = shallow(<Browse />);
  expect(wrapper.is('div')).toBeTruthy();
});
