import React from 'react';
import { shallow } from 'enzyme';
import PersonCard from './';

it('Test PersonCard', () => {
  const wrapper = shallow(<PersonCard />);
  expect(wrapper.is('div')).toBeTruthy();
});
