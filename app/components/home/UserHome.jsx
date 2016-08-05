import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import LogOutCard from '../authentication/logOut/LogOutCard.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';
import Menu from '../drawer/Menu.jsx';

import { fetchCategories, fetchDocuments } from '../../redux/actions';
import store from '../../redux/store';
import Card from '../cards/Test.jsx';
import Add from '../documents/Add.jsx';
import Dialog from 'material-ui/Dialog';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

class MyAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      addDocumentOpen: false
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.openAddDocument = this.openAddDocument.bind(this);
    this.closeAddDocument = this.closeAddDocument.bind(this);
  }

  componentWillMount() {
    fetchCategories((action) => {
      store.dispatch(action);
    });
  }

  componentDidMount() {
    fetchDocuments((action) => {
      store.dispatch(action);
    });
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  toggleDrawer() {
    store.dispatch({ type: 'CHANGE_CATEGORY' });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  openAddDocument() {
    this.setState({ addDocumentOpen: true });
  }

  closeAddDocument() {
    this.setState({ addDocumentOpen: false });
  }

  render() {
    const nodes = this.props.filteredDocuments.map((document) => {
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

    const addDocumentDialogActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.closeAddDocument}
      />,
    ];

    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.toggleDrawer}
          iconElementRight={
            <FlatButton
              label={this.props.info.username}
              onTouchTap={this.handleTouchTap}
            />
          }
        />
        <Drawer
          open={this.props.drawerOpen}
          width={256}
          docked={false}
          onRequestChange={this.toggleDrawer}
        >
          <Menu />
        </Drawer>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <LogOutCard info={this.props.info} />
        </Popover>
        <div>{nodes}</div>
        <Dialog
          title={<Add />}
          actions={addDocumentDialogActions}
          modal={false}
          open={this.state.addDocumentOpen}
          onRequestClose={this.closeDocument}
        />
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

MyAppBar.propTypes = React.PropTypes.string.isRequired;

export default MyAppBar;

