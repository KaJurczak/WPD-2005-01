import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';

it('renders without crashing', () => {
  const component = shallow(<Products />);
  expect(component).toBeTruthy();
});
