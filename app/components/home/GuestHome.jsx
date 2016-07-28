import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/input';
import Dialog from 'material-ui/Dialog';
import Tabs from '../authentication/Tabs.jsx';

import Card from '../cards/Test.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Add from '../documents/Add.jsx';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

class MyAppBar extends React.Component {
  constructor() {
    super();

    this.state = { open: false, openDocument: false };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openDocument = this.openDocument.bind(this);
    this.closeDocument = this.closeDocument.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  openDocument() {
    this.setState({ openDocument: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  closeDocument() {
    this.setState({ openDocument: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
    ];
    const actionsDocument = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.closeDocument}
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
            <Dialog
              title={<Add />}
              actions={actionsDocument}
              modal={false}
              open={this.state.openDocument}
              onRequestClose={this.closeDocument}
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
          <FloatingActionButton onTouchTap={this.openDocument} style={style} secondary={true}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
    );
  }
}

export default MyAppBar;

