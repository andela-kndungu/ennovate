import jwtDecode from 'jwt-decode';
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
    case 'LOG_IN_USER_SUCCESS':
      stateDuplicate = state.updateIn(
        ['auth', 'isAuthenticated'],
        () => {
          return true;
        }
      );

      stateDuplicate = stateDuplicate.updateIn(
        ['auth', 'info'],
        () => {
          const userInfo = jwtDecode(action.payload.token);
          return fromJS(userInfo);
        }
      );

      return stateDuplicate;
    case 'FETCHED_DOCUMENTS':
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

