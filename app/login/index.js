import jwtDecode from 'jwt-decode';
import store from '../redux/store';

const processToken = (token) => {
  const userInfo = jwtDecode(token);
  return store.dispatch({
    type: 'LOG_IN_USER_SUCCESS',
    payload: {
      userInfo
    }
  });
};

export const localLogin = () => {
  const token = localStorage.getItem('token');
  if (token) {
    processToken(token);
  }

  return null;
};

export const oauthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    processToken(token);
    return true;
  }

  return false;
};

