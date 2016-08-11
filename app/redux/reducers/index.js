import jwtDecode from 'jwt-decode';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  auth: {
    isAuthenticated: false,
  },
  documents: [],
  categories: fromJS([]),
  filteredDocuments: [],
  currentCategory: 'general',
  drawerOpen: false,
  searchTerm: '',
  addDocumentOpen: false
});

export default function (state = defaultState, action) {
  let stateDuplicate = state;
  switch (action.type) {
    case 'LOG_IN_USER_SUCCESS':
      stateDuplicate = stateDuplicate.updateIn(
        ['auth', 'isAuthenticated'],
        () => {
          return true;
        }
      );

      stateDuplicate = stateDuplicate.updateIn(
        ['auth', 'userDetails'],
        () => {
          const userInfo = jwtDecode(action.payload.token);
          return fromJS(userInfo);
        }
      );

      return stateDuplicate;
    case 'FETCHED_DOCUMENTS':
      return stateDuplicate.update(
        'documents',
        () => {
          return fromJS(action.payload);
        }
      );
    case 'FETCHED_CATEGORIES':
      return state.update('categories',
        (current) => {
          return current.concat(fromJS(action.payload));
        });
    case 'SEARCH_DOCUMENTS':
      return state.update('searchTerm',
        () => {
          return action.payload;
        });
    case 'TOGGLE_ADD_DOCUMENT':
      return state.update('addDocumentOpen',
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

