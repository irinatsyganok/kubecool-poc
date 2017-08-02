import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('container'));
}

renderApp();