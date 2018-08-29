import React, { Component } from 'react';
import StyledHeaderWrapper from './styled-header-wrapper';
import StyledHeaderTitle from './styled-header-title';
import lang from 'constants/lang';
class Header extends Component {
  render() {
    return (
      <StyledHeaderWrapper>
        <StyledHeaderTitle>{lang.APP_HEADER_TITLE}</StyledHeaderTitle>
      </StyledHeaderWrapper>
    );
  }
}

export default Header;
