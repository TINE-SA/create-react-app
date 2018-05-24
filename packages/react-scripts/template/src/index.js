import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'containers/App';
// If we need to use serviceWorker, we could tap into built-in functionality.
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
// registerServiceWorker();
