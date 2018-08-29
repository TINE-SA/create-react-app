import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledLoadedTime from './styled-loaded-time';
import lang from 'constants/lang';

class LoadedTime extends Component {
  render() {
    const { loadedTime } = this.props;
    return <StyledLoadedTime>{lang.LOADED_AT`${loadedTime}`}</StyledLoadedTime>;
  }
}

LoadedTime.propTypes = {
  loadedTime: PropTypes.string.isRequired
};

export default LoadedTime;
