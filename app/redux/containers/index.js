import { connect } from 'react-redux';

import Home from '../../components/Home.jsx';

const mapStateToProps = (state) => {
  return ({
    isAuthenticated: state.app.get('auth').get('isAuthenticated')
  });
};

export const HomeContainer = connect(mapStateToProps)(Home);

