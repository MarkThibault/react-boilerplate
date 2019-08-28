import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App', () => {
  const component = shallow(<App />);
  expect(component.find('h1').text()).toEqual('Hello, World!');
});
