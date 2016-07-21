import React from 'react';

const handleClick = (num) => {
  console.log(num);
};
const Counter = (props) => {
  console.log(props);
  return (
    <div>
      <h1 style={{ display: 'inline' }}>Counter</h1>
      <h1 style={{ display: 'inline' }}> {props.times}</h1>
      <div
        onClick={() => { props.add(1); }}
        style={{ display: 'inline' }}
      > +
      </div>
      <h1
        onClick={() => { props.remove(1); }}
        style={{ display: 'inline' }}
      > -
      </h1>
    </div>
  );
};

Counter.propTypes = {
  times: React.PropTypes.number,
  add: React.PropTypes.func,
  remove: React.PropTypes.func,
};

export default Counter;

