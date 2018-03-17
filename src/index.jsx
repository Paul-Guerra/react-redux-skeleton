import 'babel-polyfill';

import { createStore, applyMiddleware } from 'redux';
import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import app from './app';
import App from './components/app.component';
import fetch from './middleware/fetch.middle';
// import Messages from './components/messages-page.component';
// import Tokens from './components/tokens-page.component';
// import Groups from './components/groups-page.component';
// import AutoSuggest from './containers/autosuggest.container';
// import Profile from './containers/profile.container';

document.addEventListener('DOMContentLoaded', () => {
  let store = createStore(app, applyMiddleware(fetch));

  ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  );
});
