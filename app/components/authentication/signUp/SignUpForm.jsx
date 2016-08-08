import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import request from 'superagent';

const divStyle = {
  marginTop: '20px',
};

const fieldStyle = {
  display: 'block',
  margin: 'auto',
  width: '75%',
};

const buttonStyle = {
  display: 'block',
  margin: 'auto',
  width: '75%',
  color: '#FFFFFF',
  backgroundColor: '#607D8B',
  marginTop: '20px',
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snackBarOpen: false,
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      formReady: false,
      errorText: ''
    };
  }

  isAlphanumeric(value) {
    return /^[a-zA-Z0-9_]/.test(value) ?
      '' :
      'This value must be alphanumeric';
  }

  isEmail(value) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
      '' :
      'A valid email is required';
  }

  validate(field) {
    switch (field) {
      case ('username'):
        return this.state.username ?
          this.isAlphanumeric(this.state.username) :
          'This field is required';
      case ('firstName'):
        return this.state.firstName ?
          this.isAlphanumeric(this.state.firstName) :
          'This field is required';
      case ('lastName'):
        return this.state.lastName ?
          this.isAlphanumeric(this.state.lastName) :
          'This field is required';
      case ('email'):
        return this.state.email ?
          this.isEmail(this.state.email) :
          'This field is required';
      case ('password'):
        return this.state.password ?
          '' :
          'This field is required';
      default:
        return '';
    }
  }

  render() {
    return (
      <div style={divStyle}>
        <div style={fieldStyle}>
          <TextField
            style={{ width: '100%' }}
            hintText="Username"
            floatingLabelText="Username"
            value={this.state.username}
            errorText={this.validate('username')}
            onChange={
              (event) => {
                this.setState({ username: event.target.value });
              }
            }
          />
        </div>
        <div style={fieldStyle}>
          <TextField
            style={{ width: '49%', float: 'left' }}
            hintText="First Name"
            floatingLabelText="First Name"
            errorText={this.validate('firstName')}
            onChange={
              (event) => {
                this.setState({ firstName: event.target.value });
              }
            }
          />
          <TextField
            style={{ width: '49%', float: 'right' }}
            hintText="Last Name"
            floatingLabelText="Last Name"
            errorText={this.validate('lastName')}
            onChange={
              (event) => {
                this.setState({ lastName: event.target.value });
              }
            }
          />
        </div>
        <div style={fieldStyle}>
          <TextField
            style={{ width: '100%' }}
            hintText="Email"
            floatingLabelText="Email"
            errorText={this.validate('email')}
            onChange={
              (event) => {
                this.setState({ email: event.target.value });
              }
            }
          />
        </div>
        <div style={fieldStyle}>
          <TextField
            style={{ width: '100%' }}
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            errorText={this.validate('password')}
            onChange={
              (event) => {
                this.setState({ password: event.target.value });
              }
            }
          />
        </div>
        <FlatButton
          style={buttonStyle}
          label="Sign Up"
          disabled={!this.state.formReady}
        />
        <Snackbar
          open={this.state.snackBarOpen}
          style={{ textAlign: 'center' }}
          message={this.state.snackBarMessage}
          onRequestClose={() => { this.setState({ snackBarOpen: false }); }}
        />
      </div>
    );
  }
}

export default SignUpForm;

