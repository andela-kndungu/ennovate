import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

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

const LoginForm = (props) => {
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
        label="LOGIN"
        onClick={props.handleSubmit}
      />
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'simple',
  fields,
})(LoginForm);

