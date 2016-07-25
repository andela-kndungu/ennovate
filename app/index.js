import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

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

console.log(loginHelper());
render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app'));

