import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Text from './TextFields.jsx';
import Icons from './Icons.jsx';
import Divider from './Divider.jsx';

const MyTabs = () => (
  <Tabs>
    <Tab label="LOGIN" >
      <div>
        <Icons />
        <Divider />
        <Text />
      </div>
    </Tab>
    <Tab label="SIGNUP" >
      <div>
        <h2>Signup</h2>
        <p>Coming Soon</p>
      </div>
    </Tab>
  </Tabs>
);

export default MyTabs;

