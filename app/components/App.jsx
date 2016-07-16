import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './AppBar.jsx';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
  },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36',
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

