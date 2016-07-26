import { connect } from 'react-redux';

import Home from '../../components/home/index.jsx';

const mapStateToProps = (state) => {
  return ({
    isAuthenticated: state.app.get('auth').get('isAuthenticated'),
    info: state.app.get('auth').get('info'),
  });
};

export const HomeContainer = connect(mapStateToProps)(Home);

