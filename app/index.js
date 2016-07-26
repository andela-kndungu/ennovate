import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory } from 'react-router';

import Main from './components/Main.jsx';
import store from './redux/store';

injectTapEventPlugin();

const loginHelper = () => {
  const token = localStorage.getItem('token');
  if (token) {
    let base64Url = '';
    base64Url = token.split('.')[1];
    const username = JSON.parse(window.atob(base64Url))._doc.username;
    return store.dispatch({
      type: 'LOG_IN_USER_SUCCESS',
      payload: {
        token,
        username
      }
    });
  }
  return null;
};

loginHelper();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
    </Router>
  </Provider>, document.getElementById('app'));

