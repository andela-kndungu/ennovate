import { fromJS } from 'immutable';

const defaultState = fromJS({
  auth: {
    isAuthenticated: false,
    token: null
  },
  documents: fromJS([]),
  categories: [{ title: 'general' }],
  filteredDocuments: [],
  currentCategory: 'general',
  drawerOpen: false
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
      stateDuplicate = state.update(
        'filteredDocuments',
        [],
        () => {
          return fromJS(action.payload);
        });

      return stateDuplicate.update(
        'documents',
        [],
        () => {
          return fromJS(action.payload);
        }
      );
    case 'FETCHED_CATEGORIES':
      return state.update('categories',
        [],
        (current) => {
          return current.concat(fromJS(action.payload));
        });
    case 'FILTER_DOCUMENTS':
      return state.update('filteredDocuments',
        [],
        () => {
          return action.payload;
        });
    case 'CHANGE_CATEGORY':
      return state.update('drawerOpen',
        [],
        (current) => {
          return !current;
        });
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

