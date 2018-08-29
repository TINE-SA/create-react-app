import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import LoadedTime from '../';

describe('LoadedTime', () => {
  it('renders', () => {
    const wrapper = mount(<LoadedTime loadedTime="01.12.2022" />);

    expect(wrapper).toMatchSnapshot();
  });
});
