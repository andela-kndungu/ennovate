import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/input';
import Dialog from 'material-ui/Dialog';
import Tabs from '../authentication/Tabs.jsx';

import Card from '../cards/Test.jsx';

class MyAppBar extends React.Component {
  constructor() {
    super();

    this.state = { open: false };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <AppBar
          title="ennovate"
          iconElementLeft={<span></span>}
          iconElementRight={
            <FlatButton
              icon={<ActionAndroid />}
              label="LOGIN"
              onTouchTap={this.handleOpen}
            />
            }
          >
            <Dialog
              title={<Tabs />}
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            />
          </AppBar>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
    );
  }
}

export default MyAppBar;

