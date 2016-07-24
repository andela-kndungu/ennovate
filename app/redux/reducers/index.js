import { fromJS } from 'immutable';

const defaultState = fromJS({
  auth: {
    isAuthenticated: false,
    token: null
  }
});

export default function (state = defaultState, action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_COUNTER':
      return state.update('times', 1, (value) => {
        return value + action.payload;
      });
    case 'REMOVE_COUNTER':
      return state.update('times', 1, (value) => {
        return value - action.payload;
      });
    case 'LOG_IN_USER_SUCCESS':
      console.log('Im in here');
      const stateD = state.updateIn(['auth', 'isAuthenticated'], false, () => {
        return true;
      });
      console.log(stateD.get('auth'));
      return stateD.updateIn(['auth', 'token'], null, () => {
        return action.payload.token;
      });
    case 'BA':
      console.log('BA');
      return state;
    default:
      return state;
  }
}

