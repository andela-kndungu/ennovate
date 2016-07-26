import request from 'superagent';
import constants from '../constants';

export function logInUser(username, password) {
  request
    .post('api/users/login')
    .send({
      username,
      password
    })
    .end((error, response) => {
      if (error) {
        return ({
          type: constants.LOG_IN_USER_FAILURE,
          payload: {
            error
          }
        });
      }
      localStorage.setItem('token', response.body.token);
      console.log('Something Happening');
      return ({
        type: constants.LOG_IN_USER_SUCCESS,
        payload: {
          token: response.body.token
        }
      });
    });
}

