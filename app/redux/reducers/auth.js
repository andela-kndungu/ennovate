import { fromJS } from 'immutable';
import jwtDecode from 'jwt-decode';

const auth = (payload) => {
  return fromJS({
    isAuthenticated: true,
    userDetails: fromJS(jwtDecode(payload.token))
  });
};

export default auth;

