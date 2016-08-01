import { fromJS } from 'immutable';
import request from 'superagent';

const defaultState = fromJS({
  auth: {
    isAuthenticated: false,
    token: null
  },
  documents: []
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
        ['auth', 'info'],
        '',
        () => {
          return action.payload.userInfo;
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
    case 'FETCHED_DOCUMENTS':
      return state.update('documents', [], () => { return action.payload; });
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

