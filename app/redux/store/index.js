import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from '../reducers';

const reducers = {
  app: appReducer,
  form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;

