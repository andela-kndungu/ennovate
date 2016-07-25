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

const LogOutCard = () => (
  <div style={container}>
    <div>
      <Avatar />
      <Info />
    </div>
    <Divider />
    <Button />
  </div>
);

export default LogOutCard;

