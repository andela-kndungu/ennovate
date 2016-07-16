import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './AppBar.jsx';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
  },
});

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar />
        <h1>Hello World</h1>
      </div>
    </MuiThemeProvider>
  );
};

export default App;

