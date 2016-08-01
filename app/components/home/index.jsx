import React from 'react';

import GuestHome from '../../redux/containers/GuestHome.js';
import UserHome from './UserHome.jsx';

const Home = (props) => {
  return (
    props.isAuthenticated
    ? <UserHome info={props.info} />
    : <GuestHome />
  );
};

Home.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  info: React.PropTypes.object
};

export default Home;

