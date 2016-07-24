import React from 'react';

const Home = (props) => {
  return (
    <div>
      {
        props.isAuthenticated
        ? <h1>Authenticated</h1>
        : <h1>Not Authenticated</h1>
      }
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired
};

export default Home;

