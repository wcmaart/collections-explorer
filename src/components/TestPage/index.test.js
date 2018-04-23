import React from 'react';
import { shallow } from 'enzyme';
import TestPage from './';

it('Test example', () => {
  const wrapper = shallow(<TestPage />);
  expect(wrapper.is('section')).toBeTruthy();
});
