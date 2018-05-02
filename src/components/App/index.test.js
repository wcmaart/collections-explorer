import React from 'react';
import { shallow } from 'enzyme';
import App from './';

it('Test example', () => {
  const location = { pathname: '/fakepath' };
  const wrapper = shallow(<App location={location}>test</App>);
  expect(wrapper.is('div')).toBeTruthy();
});
