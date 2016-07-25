import { fromJS } from 'immutable';

const defaultState = fromJS({
  auth: {
    isAuthenticated: false,
    token: null
  }
});

export default function (state = defaultState, action) {
  let stateDuplicate = state;
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
      stateDuplicate = state.updateIn(
        ['auth', 'isAuthenticated'],
        false,
        () => {
          return true;
        }
      );

      stateDuplicate = stateDuplicate.updateIn(
        ['auth', 'username'],
        '',
        () => {
          return action.payload.username;
        }
      );

      stateDuplicate = stateDuplicate.updateIn(
        ['auth', 'token'],
        null,
        () => {
          return action.payload.token;
        }
      );

      return stateDuplicate;
    case 'LOG_OUT_USER':
      stateDuplicate = state.updateIn(
        ['auth', 'isAuthenticated'],
        false,
        () => {
          return false;
        }
      );

      stateDuplicate = stateDuplicate.updateIn(
        ['auth', 'username'],
        '',
        () => {
          return '';
        }
      );

      stateDuplicate = stateDuplicate.updateIn(
        ['auth', 'token'],
        null,
        () => {
          return '';
        }
      );

      return stateDuplicate;
    default:
      return state;
  }
}

