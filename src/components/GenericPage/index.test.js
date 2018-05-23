import React from 'react';
import { shallow } from 'enzyme';
import GenericPage from './';

it('Test example', () => {
  const wrapper = shallow(<GenericPage />);
  expect(wrapper.is('div')).toBeTruthy();
});
