import React from 'react';
import { shallow } from 'enzyme';
import Explore from './';

it('Test example', () => {
  const wrapper = shallow(<Explore />);
  expect(wrapper.is('div')).toBeTruthy();
});
