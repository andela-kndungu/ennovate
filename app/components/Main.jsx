import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './AppBar.jsx';
import Counter from './Counter.jsx';

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
        <Counter times={0} />
      </div>
    </MuiThemeProvider>
  );
};

export default Main;

