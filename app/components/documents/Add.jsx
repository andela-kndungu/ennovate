import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import SignUpForm from './DocumentForm.jsx';

const MyTabs = () => (
  <Tabs>
    <Tab label="ADD DOCUMENT" >
      <div>
        <SignUpForm />
      </div>
    </Tab>
  </Tabs>
);

export default MyTabs;

