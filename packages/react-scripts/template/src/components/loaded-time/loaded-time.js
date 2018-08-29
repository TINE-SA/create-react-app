import React, { Component } from 'react';
import StyledLoadedTime from './styled-loaded-time';
import lang from 'constants/lang';
class LoadedTime extends Component {
  render() {
    const { loadedTime } = this.props;

    return <StyledLoadedTime>{lang.LOADED_AT`${loadedTime}`}</StyledLoadedTime>;
  }
}

export default LoadedTime;
