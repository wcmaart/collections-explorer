import React from 'react';
import { shallow } from 'enzyme';
import SearchByType from './';

it('Test example', () => {
  const wrapper = shallow(<SearchByType />);
  expect(wrapper.is('div')).toBeTruthy();
});
