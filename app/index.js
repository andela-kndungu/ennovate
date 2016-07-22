import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import Main from './components/Main.jsx';

injectTapEventPlugin();

const reducers = {
  form: formReducer,
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app'));

