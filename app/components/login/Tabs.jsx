import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import LoginForm from './LoginForm.jsx';
import Icons from './Icons.jsx';
import Divider from './Divider.jsx';

const MyTabs = () => (
  <Tabs>
    <Tab label="LOGIN" >
      <div>
        <Icons />
        <Divider />
        <LoginForm onSubmit={(values) => { console.log(values); }} />
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

