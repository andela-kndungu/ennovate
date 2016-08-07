import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form';
import { TextField, SelectField } from 'redux-form-material-ui';
import request from 'superagent';
import MenuItem from 'material-ui/MenuItem';
import store from '../../redux/store';
import socket from '../../socket';
let user = '';
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
  let categories = props.categories;
  user = JSON.stringify(props.user);
  console.log(props);
  categories = categories.map((categoryObject) => {
    return (
      <MenuItem
        value={categoryObject.title}
        primaryText={categoryObject.title}
      />
    );
  });
  return (
    <div style={divStyle}>
      <div style={fieldStyle}>
      <Field
        name="category"
        component={SelectField}
        hintText="Category"
        floatingLabelText="Category"
      >
        {
          categories
        }
      </Field>
    </div>
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
  request
    .post('api/documents')
    .send({
      owner: user,
      title: values.title,
      content: values.content,
      category: values.category
    })
    .end((error, response) => {
      if (error) {
        store.dispatch({
          type: 'SIGN_UP_USER_FAILURE',
          payload: {
            error
          }
        });
      }
      socket.emit('newDocument', response.body);
      console.log(response.body);
    });
};

SignUpForm.propTypes = {
  categories: React.PropTypes.array
};

export default reduxForm({
  form: 'simple',
  validate,
  fields,
  onSubmit: (values) => {
    signUpUser(values);
  }
})(SignUpForm);

