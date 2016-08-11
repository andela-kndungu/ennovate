import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Map, List } from 'immutable';

import AddDocumentForm from './DocumentForm.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    categories: state.app.get('categories'),
    userDetails: state.app.getIn(['auth', 'userDetails'])
  });
};

const MyTabs = (props) => (
  <Tabs>
    <Tab label="ADD DOCUMENT" >
      <div>
        <AddDocumentForm
          categories={props.categories}
          userDetails={props.userDetails}
        />
      </div>
    </Tab>
  </Tabs>
);

MyTabs.propTypes = {
  categories: React.PropTypes.instanceOf(List),
  userDetails: React.PropTypes.instanceOf(Map)
};

export default connect(mapStateToProps)(MyTabs);

