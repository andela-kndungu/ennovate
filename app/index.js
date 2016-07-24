import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import ab from 'superagent';
import Main from './components/Main.jsx';

import store from './redux/store';

injectTapEventPlugin();

ab.post('/api/users/login').send({ username: 'testy', password: 'abc' }).end(function(error, response) { console.log(response); });

render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app'));

