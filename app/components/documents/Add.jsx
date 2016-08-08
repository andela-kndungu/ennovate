import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import SignUpForm from './DocumentForm.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    categories: state.app.get('categories'),
    user: state.app.get('auth')
  });
};


const MyTabs = (props) => (
  <Tabs>
    <Tab label="ADD DOCUMENT" >
      <div>
        <SignUpForm
          categories={props.categories.toJS()}
          user={props.user.get('info')}
        />
      </div>
    </Tab>
  </Tabs>
);

MyTabs.propTypes = {
  categories: React.PropTypes.array,
  user: React.PropTypes.obj
};

export default connect(mapStateToProps)(MyTabs);

