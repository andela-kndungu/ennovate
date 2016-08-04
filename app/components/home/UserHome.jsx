import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import LogOutCard from '../authentication/logOut/LogOutCard.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Toolbar from '../Toolbar/index.jsx';
import Drawer from 'material-ui/Drawer';
import Menu from '../drawer/Menu.jsx';

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

    this.state = { open: false, drawerOpen: false };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleHamburgerTouch = this.handleHamburgerTouch.bind(this);
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
    this.setState({ drawerOpen: true });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleHamburgerTouch}
          title="ennovate"
          iconElementRight={
            <FlatButton
              label={this.props.info.username}
              onTouchTap={this.handleTouchTap}
            />
            }
          />
          <Toolbar />
          <Drawer
            open={this.state.drawerOpen}
            width={256}
            docked={false}
            onRequestChange={(open) => this.setState({drawerOpen: false})}>
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
          <FloatingActionButton style={style} secondary={true}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
    );
  }
}

MyAppBar.propTypes = React.PropTypes.string.isRequired;

export default MyAppBar;

