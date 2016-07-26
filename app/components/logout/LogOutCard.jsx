import React from 'react';

import Avatar from './Avatar.jsx';
import Info from './Info.jsx';
import Divider from './Divider.jsx';
import Button from './Button.jsx';

const container = {
  height: '140px',
  width: '300px',
  margin: '10px',
};

const LogOutCard = (props) => (
  <div style={container}>
    <div>
      <Avatar photo={props.info.photo} />
      <Info name={props.info.name} email={props.info.email} />
    </div>
    <Divider />
    <Button />
  </div>
);

LogOutCard.propTypes = {
  info: React.PropTypes.object
};

export default LogOutCard;

