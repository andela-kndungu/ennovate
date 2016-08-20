import { fromJS } from 'immutable';
import constants from '../app/redux/constants';
import reducer from '../app/redux/reducers';
import { should } from 'chai';

import authReducer from '../app/redux/reducers/auth.js';

should();

describe('Reducers', () => {
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

  it('Returns the initial state', () => {
    (reducer(undefined, {})).should.eql(defaultState);
  });

  describe('LOG_IN_USER_SUCCESS', () => {
    const action = {
      type: constants.LOG_IN_USER_SUCCESS,
      payload: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjp7ImZpcnN0IjoiSm9obiIsImxhc3QiOiJEb2UifSwidXNlcm5hbWUiOiJqb2huIiwicGhvdG8iOiJwaG90b1VybCIsImVtYWlsIjoiam9obkBkb2UuY29tIiwicm9sZXMiOlsidXNlciJdLCJfaWQiOiIxMjMifQ.GVZhE3T299nI2d6xjkV8pjUeNy0OhuOfAuDZb0G9rBU'
      }
    };

    it('Auth reducer returns expected value', () => {
      (authReducer(action.payload)).should.eql(fromJS({
        isAuthenticated: true,
        userDetails: {
          name: {
            first: 'John',
            last: 'Doe'
          },
          username: 'john',
          photo: 'photoUrl',
          email: 'john@doe.com',
          roles: ['user'],
          _id: '123'
        },
      }));
    });

    it('Updates state on user log in', () => {
      (reducer(undefined, action)).should.eql(fromJS({
        auth: {
          isAuthenticated: true,
          userDetails: {
            name: {
              first: 'John',
              last: 'Doe'
            },
            username: 'john',
            photo: 'photoUrl',
            email: 'john@doe.com',
            roles: ['user'],
            _id: '123'
          }
        },
        documents: [],
        categories: fromJS([]),
        filteredDocuments: [],
        currentCategory: 'general',
        drawerOpen: false,
        searchTerm: '',
        addDocumentOpen: false
      }));
    });
  });
});
