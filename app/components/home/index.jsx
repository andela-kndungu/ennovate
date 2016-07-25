import React from 'react';

import Guest from './GuestHome.jsx';
import User from './UserHome.jsx';

const Home = (props) => {
  return (
    <div>
      {
        props.isAuthenticated
          ? <User username={props.username} />
          : <Guest />
      }
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  username: React.PropTypes.string
};

export default Home;

