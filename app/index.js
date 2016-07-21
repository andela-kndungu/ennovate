import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import Main from './components/Main.jsx';

import reducer from './redux/reducers';
import { CounterContainer } from './redux/containers';

injectTapEventPlugin();

const store = createStore(reducer);
render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>, document.getElementById('app'));

