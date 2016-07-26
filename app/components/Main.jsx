import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from '../redux/store';
import { HomeContainer as Home } from '../redux/containers';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
  },
});
const processOauthToken = (props) => {
  const token = props.location.query.token;
  if (token) {
    let base64Url = '';
    base64Url = token.split('.')[1];
    const username = JSON.parse(window.atob(base64Url))._doc.username;
    const name = JSON.parse(window.atob(base64Url))._doc.username;
    const email = JSON.parse(window.atob(base64Url))._doc.username;
    const photo = JSON.parse(window.atob(base64Url))._doc.username;
    store.dispatch({
      type: 'LOG_IN_USER_SUCCESS',
      payload: {
        username,
        name,
        email,
        photo
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

