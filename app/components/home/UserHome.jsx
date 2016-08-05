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

    this.state = { open: false, drawerOpen: props.drawerOpen };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleHamburgerTouch = this.handleHamburgerTouch.bind(this);
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

  handleHamburgerTouch() {
    store.dispatch({ type: 'CHANGE_CATEGORY' });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
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
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleHamburgerTouch}
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
            onRequestChange={(open) => { store.dispatch({ type: 'CHANGE_CATEGORY' })}}>
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
          <FloatingActionButton style={style} secondary={true}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
    );
  }
}

MyAppBar.propTypes = React.PropTypes.string.isRequired;

export default MyAppBar;

