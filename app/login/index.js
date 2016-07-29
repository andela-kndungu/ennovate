import jwtDecode from 'jwt-decode';
import store from '../redux/store';

export default function localLogin() {
  const token = localStorage.getItem('token');
  if (token) {
    const userInfo = jwtDecode(token);
    return store.dispatch({
      type: 'LOG_IN_USER_SUCCESS',
      payload: {
        userInfo
      }
    });
  }
  return null;
}

