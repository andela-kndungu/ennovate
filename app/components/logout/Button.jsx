import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const button = {
  textAlign: 'right',
  marginTop: '10px'
};

const LogOutButton = () => {
  return (
    <div style={button}>
      <FlatButton label="LOG OUT" primary />
    </div>
  );
};

export default LogOutButton;

