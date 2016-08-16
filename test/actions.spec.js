import {
  test,
  logInUser
} from '../app/redux/actions';
import nock from 'nock';
import constants from '../app/redux/constants';

describe('Actions', () => {
  describe('Test', () => {
    it('Return a b', (done) => {
      // execute
      const action = test();

      // verify
      (action).should.eql({ a: 'a', b: 'b' });
      done();
    });
  });

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
  });
});

