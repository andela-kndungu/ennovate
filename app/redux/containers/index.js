import { connect } from 'react-redux';

import Counter from '../../components/Counter.jsx';
import { addCounter, removeCounter } from '../actions';

function mapStateToProps(state) {
  return { times: state.get('times', 1) };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (number) => dispatch(addCounter(number)),
    remove: (number) => dispatch(removeCounter(number)),
  };
}
export const CounterContainer = connect(mapStateToProps,
  mapDispatchToProps)(Counter);

