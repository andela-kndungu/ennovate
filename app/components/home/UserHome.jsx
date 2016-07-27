import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import LogOutCard from '../authentication/logOut/LogOutCard.jsx';

class MyAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
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
          title="ennovate"
          iconElementRight={
            <FlatButton
              label={this.props.info.username}
              onTouchTap={this.handleTouchTap}
            />
            }
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <LogOutCard info={this.props.info} />
        </Popover>
      </div>
    );
  }
}

MyAppBar.propTypes = React.PropTypes.string.isRequired;

export default MyAppBar;

