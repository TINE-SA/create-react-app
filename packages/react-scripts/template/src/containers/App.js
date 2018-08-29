import React, { Component } from 'react';
import './App.css';

import Header from 'components/header';
import LoadedTime from 'components/loaded-time';
import api from 'services/api';
import dateUtil from 'util/date-formatting';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedTime: null,
    };
  }

  componentDidMount() {
    this.performApiCallOrSomethingElseAsync();
  }

  performApiCallOrSomethingElseAsync() {
    api.getSomething().then(() => {
      this.setState({
        loadedTime: new Date(),
      });
    });
  }

  render() {
    const { loadedTime } = this.state;

    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/containers/App.js</code> and save to
          reload.
        </p>
        {loadedTime && (
          <LoadedTime
            loadedTime={dateUtil.getDisplayDateFromDateObject(loadedTime)}
          />
        )}
      </div>
    );
  }
}

export default App;
