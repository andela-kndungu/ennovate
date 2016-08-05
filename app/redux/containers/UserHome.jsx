import { connect } from 'react-redux';

import UserHome from '../../components/home/UserHome.jsx';

const mapStateToProps = (state) => {
  return ({
    documents: state.app.get('documents'),
    filteredDocuments: state.app.get('filteredDocuments'),
    currentCategory: state.app.get('currentCategory'),
    drawerOpen: state.app.get('drawerOpen')
  });
};

export default connect(mapStateToProps)(UserHome);

