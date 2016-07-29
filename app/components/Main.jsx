import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Home } from '../redux/containers';
import { oauthToken } from '../login';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
  },
});

const Main = (props) => {
  if (oauthToken(props.location.query.token)) {
    props.history.push('/');
  }

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Home />
      </div>
    </MuiThemeProvider>
  );
};

Main.propTypes = {
  location: React.PropTypes.shape({
    query: React.PropTypes.shape({
      token: React.PropTypes.string
    })
  }),
  history: React.PropTypes.object
};

export default Main;

