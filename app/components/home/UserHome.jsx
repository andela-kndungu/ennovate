import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const MyAppBar = (props) => {
  return (
    <AppBar
      title="ennovate"
      iconElementRight={
        <FlatButton
          label={props.username}
        />
        }
    />
  );
};

MyAppBar.propTypes = React.PropTypes.string.isRequired;

export default MyAppBar;

