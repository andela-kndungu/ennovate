import { connect } from 'react-redux';

import Home from '../../components/home/index.jsx';

const mapStateToProps = (state) => {
  return ({
    isAuthenticated: state.app.get('auth').get('isAuthenticated'),
    username: state.app.get('auth').get('username')
  });
};

export const HomeContainer = connect(mapStateToProps)(Home);

