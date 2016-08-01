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
import store from '../../redux/store';
import socket from '../../socket';

import { fetchDocuments } from '../../redux/actions';

socket.on('newDocument', () => {
  fetchDocuments((action) => {
    store.dispatch(action);
  });
});

const style = {
  margin: 0,
  top: 'auto',
  right: 10,
  bottom: 10,
  left: 'auto',
  position: 'fixed',
};

class GuestAppBar extends React.Component {
  constructor() {
    super();

    this.state = {
      loginOpen: false,
      addDocumentOpen: false
    };

    this.openLogin = this.openLogin.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
    this.openAddDocument = this.openAddDocument.bind(this);
    this.closeAddDocument = this.closeAddDocument.bind(this);
  }

  componentWillMount() {
    fetchDocuments((action) => {
      store.dispatch(action);
    });
  }

  openLogin() {
    this.setState({ loginOpen: true });
  }

  openAddDocument() {
    this.setState({ addDocumentOpen: true });
  }

  closeLogin() {
    this.setState({ loginOpen: false });
  }

  closeAddDocument() {
    this.setState({ addDocumentOpen: false });
  }

  render() {
    const loginDialogActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.closeLogin}
      />,
    ];

    const addDocumentDialogActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.closeAddDocument}
      />,
    ];

    const nodes = this.props.documents.map((document) => {
      return (
        <Card
          title={document.title}
          content={document.content}
          owner={'document.owner'}
          date={document.createdAt}
          key={document.createdAt}
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
              onTouchTap={this.openLogin}
            />
            }
          style={{ position: 'fixed' }}
        />
        <Dialog
          title={<Tabs />}
          actions={loginDialogActions}
          modal={false}
          open={this.state.loginOpen}
          onRequestClose={this.closeLogin}
        />
        <Dialog
          title={<Add />}
          actions={addDocumentDialogActions}
          modal={false}
          open={this.state.addDocumentOpen}
          onRequestClose={this.closeDocument}
        />
        <div style={{ height: '64px' }}></div>
        <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'wrap', backgroundColor: 'ghostWhite' }}>
          {nodes}
        </div>
        <FloatingActionButton
          onTouchTap={this.openAddDocument}
          style={style}
          secondary
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

GuestAppBar.propTypes = {
  documents: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default GuestAppBar;

