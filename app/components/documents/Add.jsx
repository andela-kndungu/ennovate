import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import SignUpForm from './DocumentForm.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    categories: state.app.get('categories')
  });
};


const MyTabs = (props) => (
  <Tabs>
    <Tab label="ADD DOCUMENT" >
      <div>
        <SignUpForm categories={props.categories.toJS()} />
      </div>
    </Tab>
  </Tabs>
);

MyTabs.propTypes = {
  categories: React.PropTypes.array
};

export default connect(mapStateToProps)(MyTabs);

