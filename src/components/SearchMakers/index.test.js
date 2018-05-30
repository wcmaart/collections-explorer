import React from 'react';
import { shallow } from 'enzyme';
import SearchMakers from './';

it('Test example', () => {
  const wrapper = shallow(<SearchMakers />);
  expect(wrapper.is('div')).toBeTruthy();
});
