import { test } from '../app/redux/actions';
import nock from 'nock';
import request from 'superagent';

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
  describe('Nock', () => {
    it('Mocks http requests', (done) => {
      nock('http://google.com')
        .get('/ab')
        .reply(200, {
          id: '1asdf23ABC',
        });
      request
        .get('http://google.com/ab')
        .end((error, response) => {
          console.log(error);
          (response.body).should.eql({ id: '123ABC' });
          done();
        });
    });
  });
});

