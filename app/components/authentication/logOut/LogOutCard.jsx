import React from 'react';
import { Map } from 'immutable';

import Avatar from './Avatar.jsx';
import Info from './Info.jsx';
import Divider from './Divider.jsx';
import Button from './Button.jsx';

const container = {
  height: '140px',
  width: '300px',
  margin: '10px',
};

const LogOutCard = (props) => {
  const first = props.info.getIn(['name', 'first']);
  const last = props.info.getIn(['name', 'last']);
  return (
    <div style={container}>
      <div>
        <Avatar photo={props.info.get('photo')} />
        <Info
          name={{ first, last }}
          email={props.info.get('email')}
        />
      </div>
      <Divider />
      <Button />
    </div>
  );
};

LogOutCard.propTypes = {
  info: React.PropTypes.instanceOf(Map)
};

export default LogOutCard;

