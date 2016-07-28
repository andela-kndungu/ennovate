import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import request from 'superagent';

import store from '../../redux/store';

const fields = [
  'title',
  'content'
];

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

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'title',
    'content',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

const SignUpForm = (props) => {
  return (
    <div style={divStyle}>
      <div style={fieldStyle}>
        <Field
          style={{ width: '100%' }}
          name="title"
          component={TextField}
          hintText="Title"
          floatingLabelText="Title"
        />
      </div>
      <div style={fieldStyle}>
        <Field
          style={{ width: '100%' }}
          name="content"
          component={TextField}
          hintText="Content"
          floatingLabelText="Content"
          multiLine
          rowsMax={4}
        />
      </div>
      <FlatButton
        style={buttonStyle}
        label="Add"
        onClick={props.handleSubmit}
      />
    </div>
  );
};

SignUpForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

const signUpUser = (values) => {
  console.log(values);
  request
    .post('api/users')
    .send(values)
    .end((error, response) => {
      if (error) {
        store.dispatch({
          type: 'SIGN_UP_USER_FAILURE',
          payload: {
            error
          }
        });
      }
      console.log(response.body);
    });
};

export default reduxForm({
  form: 'simple',
  validate,
  fields,
  onSubmit: (values) => {
    signUpUser(values);
  }
})(SignUpForm);

