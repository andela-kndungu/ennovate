import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main.jsx';

import counterReducer from './redux/reducers';

import { reducer as formReducer } from 'redux-form';
const reducers = {
  form: formReducer,     // <---- Mounted at 'form'. See note below.
  counter: counterReducer,
};

const reducer = combineReducers(reducers);
injectTapEventPlugin();

const store = createStore(reducer);
render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app'));

