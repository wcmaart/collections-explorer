import React from 'react';
import { shallow } from 'enzyme';
import ArtObjects from './';

it('Test example', () => {
  const wrapper = shallow(<ArtObjects />);
  expect(wrapper.is('ul')).toBeTruthy();
});