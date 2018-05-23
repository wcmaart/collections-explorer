import React from 'react';
import { shallow } from 'enzyme';
import SearchAll from './';

it('Test example', () => {
  const wrapper = shallow(<SearchAll />);
  expect(wrapper.is('div')).toBeTruthy();
});
