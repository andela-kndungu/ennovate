import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import LoginForm from './LoginForm.jsx';
import Icons from './Icons.jsx';
import Divider from './Divider.jsx';

const MyTabs = () => (
  <Tabs>
    <Tab label="LOG IN" >
      <div>
        <Icons />
        <Divider />
        <LoginForm />
      </div>
    </Tab>
    <Tab label="SIGN UP" >
      <div>
        <h2>Signup</h2>
        <p>Coming Soon</p>
      </div>
    </Tab>
  </Tabs>
);

export default MyTabs;

