import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main.jsx';

import reducer from './redux/reducers';

injectTapEventPlugin();

const store = createStore(reducer);
render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app'));

