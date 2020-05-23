import React from 'react';
import { shallow } from 'enzyme';
import Shop from './Shop';

it('renders without crashing', () => {
  const component = shallow(<Shop />);
  expect(component).toBeTruthy();
});
