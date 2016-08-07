import React from 'react';
import TextField from 'material-ui/TextField';

const containerStyle = {
  width: '80%',
  maxWidth: '500px',
  margin: 'auto'
};
const hintStyle = {
  width: '100%',
  textAlign: 'center',
};

const fieldStyle = {
  width: '100%'
};

const inputStyle = {
  color: 'white',
  textAlign: 'center'
};

const SearcBar = () => {
  return (
    <div style={containerStyle}>
      <TextField
        style={fieldStyle}
        hintText="search"
        hintStyle={hintStyle}
        inputStyle={inputStyle}
      />
    </div>
  );
};

export default SearcBar;

