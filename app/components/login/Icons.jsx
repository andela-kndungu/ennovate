import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const outerDivStyle = {
  margin: 'auto',
  width: '75%',
};

const innnerDivStyle = {
  margin: 'auto',
  width: '50%',
};

const iconStyle = {
  margin: 12,
  height: '60px',
};

const Icons = () => (
  <div style={outerDivStyle}>
    <div style={innnerDivStyle}>
      <div style={{ display: 'inline' }} title="Login with Google">
        <FlatButton
          icon={<FontIcon className="icon-google-plus2" />}
          style={iconStyle}
        />
      </div>
      <div style={{ display: 'inline' }} title="Login with GitHub">
        <FlatButton
          icon={<FontIcon className="icon-github" />}
          style={iconStyle}
        />
      </div>
    </div>
  </div>
);

export default Icons;

