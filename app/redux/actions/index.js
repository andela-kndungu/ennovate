import request from 'superagent';
import constants from '../constants';

const urlPrefix = process.env.NODE_ENV ===
  'test' ? 'http://localhost:8181/' : '';

export function logInUser(userCredentials, callback) {
  request
    .post(`${urlPrefix}api/users/login`)
    .send(userCredentials)
    .end((error, response) => {
      if (error) {
        return callback({
          type: constants.LOG_IN_USER_FAILURE,
          payload: {
            error
          }
        });
      }
      return callback({
        type: constants.LOG_IN_USER_SUCCESS,
        payload: {
          token: response.body.token
        }
      });
    });
}

export function fetchDocuments(token, query, callback) {
  request.get(`${urlPrefix}api/documents`)
    .query(query)
    .set('x-access-token', token)
    .end((error, response) => {
      return callback({
        type: constants.FETCHED_DOCUMENTS,
        payload: response.body
      });
    });
}

export function fetchPublicDocuments(query, callback) {
  request.get(`${urlPrefix}api/documents/public`)
    .query(query)
    .end((error, response) => {
      return callback({
        type: constants.FETCHED_DOCUMENTS,
        payload: response.body
      });
    });
}

export function fetchCategories(callback) {
  request.get(`${urlPrefix}api/categories`)
    .end((error, response) => {
      return callback({
        type: constants.FETCHED_CATEGORIES,
        payload: response.body
      });
    });
}

