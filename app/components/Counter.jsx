import React from 'react';

const Counter = (props) => {
  return (
    <div>
      <h1 style={{ display: 'inline' }}>Counter</h1>
      <h1 style={{ display: 'inline' }}> {props.times}</h1>
    </div>
  );
};

Counter.propTypes = { times: React.PropTypes.number };
export default Counter;

