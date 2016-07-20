import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const MyAppBar = () => {
  return (
    <AppBar
      title="ennovate"
      iconElementRight={<FlatButton label="Login" />}
    />
  );
};

export default MyAppBar;

