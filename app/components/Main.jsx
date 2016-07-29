import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import jwtDecode from 'jwt-decode';

import store from '../redux/store';
import { Home } from '../redux/containers';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
  },
});

const processOauthToken = (props) => {
  const token = props.location.query.token;
  if (token) {
    localStorage.setItem('token', token);
    const userInfo = jwtDecode(token);
    store.dispatch({
      type: 'LOG_IN_USER_SUCCESS',
      payload: {
        userInfo
      }
    });
    props.history.push('/');
  }

  return null;
};

const Main = (props) => {
  processOauthToken(props);
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Home />
      </div>
    </MuiThemeProvider>
  );
};

export default Main;

