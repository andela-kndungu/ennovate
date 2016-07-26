import React from 'react';

import Guest from './GuestHome.jsx';
import User from './UserHome.jsx';

const Home = (props) => {
  return (
    <div>
      {
        props.isAuthenticated
          ? <User info={props.info} />
          : <Guest />
      }
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  info: React.PropTypes.object
};

export default Home;

