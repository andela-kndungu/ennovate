import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { TextField } from 'redux-form-material-ui';
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
      username: '#',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      formReady: false,
      errorText: ''
    };

    this.signUpUser = this.signUpUser.bind(this);
    this.validate = this.validate.bind(this);
    this.isReady = this.isReady.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  signUpUser() {
    const values = this.state.form;
    console.log(values);
    request
      .post('api/users')
      .send(values)
      .end((error) => {
        if (error) {
          this.setState({
            snackBarMessage: 'Error creating account, try again.',
            snackBarOpen: true
          });
        }

        this.setState({
          snackBarMessage: 'Account created, Log in to continue.',
          snackBarOpen: true
        });
      });
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
  isAlpha(value) {
    return /^[a-zA-Z0-9_]/.test(value);
  }

  isEm(value) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  }
  isReady() {
    const ready =
      this.isAlpha(this.state.username) &&
      this.isAlpha(this.state.firstName) &&
      this.isAlpha(this.state.laastName) &&
      this.isEm(this.state.email) &&
      this.state.password.length > 0;
    this.setState({ formReady: ready });
    console.log('################');
    console.log(this.state.username);
    console.log(this.isAlpha(this.state.username));
    console.log('################');
  }

  validate(field) {
    switch (field) {
      case ('username'):
        return this.isAlpha(this.state.username) ?
          this.setState({ errorText: '' }) :
          this.setState({ errorText: 'Invalid Value' });
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
        return 'abcd';
    }
  }

  handleOnChange(event) {
    console.log('{{{{{{{{{{{{}}}}}}}}}}}}');
    console.log(event.target.value);
    console.log('{{{{{{{{{{{{}}}}}}}}}}}}');
    this.setState({ username: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div style={divStyle}>
        <div style={fieldStyle}>
          <TextField
            style={{ width: '100%' }}
            hintText="Username"
            floatingLabelText="Username"
            errorText={this.state.errorText}
            value={this.state.username}
            onChange={
                this.handleOnChange
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
                this.isReady();
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
                this.isReady();
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
                this.isReady();
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
                this.isReady();
              }
            }
          />
        </div>
        <FlatButton
          style={buttonStyle}
          label="Sign Up"
          disabled={!this.state.formReady}
          onClick={() => {
            const values = this.state.form;
            request
              .post('api/users')
              .send(values)
              .end((error) => {
                if (error) {
                  this.setState({
                    snackBarMessage: 'Error creating account, try again.',
                    snackBarOpen: true
                  });
                }

                this.setState({
                  snackBarMessage: 'Account created, Log in to continue.',
                  snackBarOpen: true
                });
              });
          }}
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

