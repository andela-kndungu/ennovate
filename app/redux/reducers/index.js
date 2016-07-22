import { Map } from 'immutable';

const defaultState = Map({});

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'ADD_COUNTER':
      return state.update('times', 1, (value) => {
        return value + action.payload;
      });
    case 'REMOVE_COUNTER':
      return state.update('times', 1, (value) => {
        return value - action.payload;
      });
    default:
      return state;
  }
}

