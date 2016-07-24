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
      return ({
        type: constants.LOG_IN_USER_SUCCESS,
        payload: {
          token: response.body.token
        }
      });
    });
}

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token

    }

  }

}

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText

    }

  }

}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST

  }

}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: LOGOUT_USER

  }

}

export function logoutAndRedirect() {
  return (dispatch, state) => {
    dispatch(logout());
    dispatch(pushState(null, '/login'));

  }

}


export function receiveProtectedData(data) {
  return {
    type: RECEIVE_PROTECTED_DATA,
    payload: {
      data: data

    }

  }

}

export function fetchProtectedDataRequest() {
  return {
    type: FETCH_PROTECTED_DATA_REQUEST

  }

}

export function fetchProtectedData(token) {

  return (dispatch, state) => {
    dispatch(fetchProtectedDataRequest());
    return fetch('http://localhost:3000/getData/', {
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${token}`

      }

    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        dispatch(receiveProtectedData(response.data));

      })
      .catch(error => {
        if(error.response.status === 401) {
          dispatch(loginUserFailure(error));
          dispatch(pushState(null, '/login'));

        }

      })

  }

}
