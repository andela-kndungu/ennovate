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
import request from 'superagent';
import store from '../../redux/store';
import io from 'socket.io-client';

const socket = io.connect('http://127.0.0.1:3000');
socket.on('newDocument', message => {
  console.log('received');
  request.get('api/documents')
    .end((error, response) => {
      store.dispatch({ type: 'FETCHED_DOCUMENTS', payload: response.body });
      console.log('and dispatched')
    });
});
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

  componentWillMount() {
    request.get('api/documents')
      .end((error, response) => {
        store.dispatch({ type: 'FETCHED_DOCUMENTS', payload: response.body });
      });
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

    const nodes = this.props.documents.map((document) => {
      return (
        <Card
          title={document.title}
          content={document.content}
          owner={'document.owner'}
          date={document.createdAt}
        />
      );
    });
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
            {nodes}
          </div>
          <FloatingActionButton onTouchTap={this.openDocument} style={style} secondary={true}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
    );
  }
}

export default MyAppBar;

