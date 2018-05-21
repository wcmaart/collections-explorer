import React from 'react';
import { shallow } from 'enzyme';
import ArtObjects from './';

it('Test art objects', () => {
  const wrapper = shallow(<ArtObjects />);
  expect(wrapper.is('div')).toBeTruthy();
});
