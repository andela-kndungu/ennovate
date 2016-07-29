import React from 'react';

import GuestContainer from '../../redux/containers/GuestContainer.js';
import User from './UserHome.jsx';

const Home = (props) => {
  return (
    <div>
      {
        props.isAuthenticated
          ? <User info={props.info} />
          : <GuestContainer />
      }
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  info: React.PropTypes.object
};

export default Home;

