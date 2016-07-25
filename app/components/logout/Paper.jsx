import React from 'react';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const style = {
  height: '140px',
  width: '300px',
  margin: '10px',
};

const imageDiv = {
  display: 'inline-block',
  margin: '5px',
  float: 'left'
};

const infoDiv = {
  display: 'inline-block',
  marginLeft: '10px'
};

const name = {
  fontSize: '18px',
  fontWeight: '500',
  marginBottom: '0px'
};

const email = {
  fontSize: '14px',
  fontWeight: '300',
  marginTop: '5px'
};

const divider = {
  width: '100%',
  marginTop: '20px'
};

const LogoutCard = () => (
  <div style={style}>
    <div>
      <div style={imageDiv}>
        <Avatar
          size={70}
          src="https://avatars.githubusercontent.com/u/17295379?v=3&s=500"
          alt="Profile"
        />
      </div>
      <div style={infoDiv}>
        <p style={name}>Kinuthia Ndung'u</p>
        <p style={email}>kinuthia.ndungu@andela.com</p>
      </div>
    </div>
    <Divider style={divider} />
    <div style={{ textAlign: 'right', marginTop: '10px' }}>
      <FlatButton label="LOG OUT" primary />
    </div>
  </div>
);

export default LogoutCard;
