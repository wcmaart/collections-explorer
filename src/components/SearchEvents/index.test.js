import React from 'react';
import { shallow } from 'enzyme';
import SearchEvents from './';

it('Test example', () => {
  const wrapper = shallow(<SearchEvents />);
  expect(wrapper.is('div')).toBeTruthy();
});
