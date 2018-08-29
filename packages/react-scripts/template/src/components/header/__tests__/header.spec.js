import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Header from '../';

describe('Header', () => {
  it('renders', () => {
    const wrapper = mount(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
