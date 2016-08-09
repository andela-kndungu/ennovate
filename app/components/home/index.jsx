import React from 'react';
import { Map } from 'immutable';

import GuestHome from '../../redux/containers/GuestHome.js';
import UserHome from '../../redux/containers/UserHome.jsx';

const Home = (props) => {
  return (
    props.isAuthenticated
    ? <UserHome info={props.info} />
    : <GuestHome />
  );
};

Home.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  info: React.PropTypes.instanceOf(Map)
};

export default Home;

