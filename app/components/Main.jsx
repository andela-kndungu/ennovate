import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { HomeContainer as Home } from '../redux/containers';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
  },
});

const Main = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Home />
      </div>
    </MuiThemeProvider>
  );
};

export default Main;

