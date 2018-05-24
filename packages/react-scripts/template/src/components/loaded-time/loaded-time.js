import React, { Component } from 'react';
import './loaded-time.css';

class LoadedTime extends Component {
  render() {
    const {loadedTime} = this.props;

    return (
      <div className="loaded-time">Loaded at: {loadedTime}</div>
    );
  }
}

export default LoadedTime;
