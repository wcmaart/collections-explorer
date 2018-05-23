import React from 'react';
import { shallow } from 'enzyme';
import ArtObjectCard from './';

it('Test ArtObjectCard', () => {
  const wrapper = shallow(<ArtObjectCard />);
  expect(wrapper.is('div')).toBeTruthy();
});
