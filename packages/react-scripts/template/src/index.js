import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

// If we need to use serviceWorker, we could tap into built-in functionality.
// import registerServiceWorker from './registerServiceWorker';

import App from 'containers/app';

// This is the only place in the project where global styles
// are allowed. Use it for resets etc but keep it to a
// minimum.
// https://www.styled-components.com/docs/api#injectglobal
injectGlobal(`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`);

ReactDOM.render(<App />, document.getElementById('app'));
// registerServiceWorker();
