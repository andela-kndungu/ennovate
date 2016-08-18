import {
  logInUser,
  fetchDocuments,
  fetchPublicDocuments,
  fetchCategories
} from '../app/redux/actions';
import nock from 'nock';
import constants from '../app/redux/constants';

describe('Actions', () => {
  describe('logInUser', () => {
    it('Creates action with token for valid user', (done) => {
      nock('http://localhost:8181')
        .post('/api/users/login', {
          username: 'validUsername',
          password: 'validPassword'
        })
        .reply(200, {
          token: 'aTokenString',
        });
      const userCredentials = {
        username: 'validUsername',
        password: 'validPassword'
      };

      logInUser(userCredentials, (action) => {
        (action.type).should.eql(constants.LOG_IN_USER_SUCCESS);
        (action.payload.token).should.be.a('string');
        done();
      });
    });

    it('Creates action with error for invalid user', (done) => {
      nock('http://localhost:8181')
        .post('/api/users/login', {
          username: 'ivalidUsername',
          password: 'ivalidPassword'
        })
        .reply(401, {
          token: 'aTokenString',
        });
      const userCredentials = {
        username: 'ivalidUsername',
        password: 'ivalidPassword'
      };

      logInUser(userCredentials, (action) => {
        (action.type).should.eql(constants.LOG_IN_USER_FAILURE);
        action.payload.error.should.be.ok;
        done();
      });
    });
  });

  describe('fetchDocuments', () => {
    it('Fetches documents from the server', (done) => {
      nock('http://localhost:8181')
        .get('/api/documents')
        .reply(200, [{}, {}, {}]);

      fetchDocuments(null, null, (action) => {
        (action.type).should.eql(constants.FETCHED_DOCUMENTS);
        (action.payload).should.be.an('array');
        done();
      });
    });
  });

  describe('fetchPublicDocuments', () => {
    it('Fetches pubic documents from the server', (done) => {
      nock('http://localhost:8181')
        .get('/api/documents/public')
        .reply(200, [{}, {}, {}]);

      fetchPublicDocuments(null, (action) => {
        (action.type).should.eql(constants.FETCHED_DOCUMENTS);
        (action.payload).should.be.an('array');
        done();
      });
    });
  });

  describe('fetchCategories', () => {
    it('Fetches categories from the server', (done) => {
      nock('http://localhost:8181')
        .get('/api/categories')
        .reply(200, [{}, {}, {}]);

      fetchCategories((action) => {
        (action.type).should.eql(constants.FETCHED_CATEGORIES);
        (action.payload).should.be.an('array');
        done();
      });
    });
  });
});

