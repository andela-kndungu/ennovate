import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import Main from './components/Main.jsx';
import store from './redux/store';

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app'));

