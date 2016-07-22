import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './AppBar.jsx';
import { CounterContainer } from '../redux/containers/index.js';

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
        <AppBar />
        <h1>Hello World</h1>
        <CounterContainer />
      </div>
    </MuiThemeProvider>
  );
};

export default Main;

