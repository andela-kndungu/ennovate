import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import request from 'superagent';

import store from '../../redux/store';

const fields = ['username', 'password'];

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

const LogInForm = (props) => {
  return (
    <div style={divStyle}>
      <div style={fieldStyle}>
        <Field
          style={{ width: '100%' }}
          name="username"
          component={TextField}
          hintText="Username"
          floatingLabelText="Username"
        />
      </div>
      <div style={fieldStyle}>
        <Field
          style={{ width: '100%' }}
          name="password"
          component={TextField}
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        />
      </div>
      <FlatButton
        style={buttonStyle}
        label="LOG IN"
        onClick={props.handleSubmit}
      />
    </div>
  );
};

LogInForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

const logInUser = (username, password) => {
  request
    .post('api/users/login')
    .send({
      username,
      password
    })
    .end((error, response) => {
      if (error) {
        store.dispatch({
          type: 'LOG_IN_USER_FAILURE',
          payload: {
            error
          }
        });
      }
      localStorage.setItem('token', response.body.token);
      store.dispatch({
        type: 'LOG_IN_USER_SUCCESS',
        payload: {
          token: response.body.token,
          username: response.body.username
        }
      });
    });
};

export default reduxForm({
  form: 'simple',
  fields,
  onSubmit: (values) => {
    logInUser(values.username, values.password);
  }
})(LogInForm);

