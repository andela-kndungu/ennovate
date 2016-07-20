import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const divStyle = {
  marginTop: '20px',
};

const fieldStyle = {
  display: 'block',
  margin: 'auto',
  width: '75%',
};


const buttonStyle = {
  display: 'block',
  margin: 'auto',
  width: '75%',
  color: '#FFFFFF',
  backgroundColor: '#607D8B',
  marginTop: '20px',
};

const TextFields = () => (
  <div style={divStyle}>
    <TextField
      hintText="Username"
      style={fieldStyle}
    />
    <TextField
      hintText="Password"
      style={fieldStyle}
    />
    <FlatButton
      style={buttonStyle}
      label="LOGIN"
    />
  </div>
);

export default TextFields;

