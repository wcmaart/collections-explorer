import React from 'react';
import { shallow } from 'enzyme';
import SearchObjects from './';

it('Test example', () => {
  const wrapper = shallow(<SearchObjects />);
  expect(wrapper.is('div')).toBeTruthy();
});
