import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
export const fields = ['username', 'password'];

class SimpleForm extends React.Component {
  render() {
    console.log('+++++++++');
    console.log(TextField);
    console.log('+++++++++');
    const {
      fields: { username, password },
      handleSubmit,
      submitting,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            component={TextField}
            hintText="Name"
            floatingLabelText="Name"
            ref="name"
            withRef
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

SimpleForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'simple',
  fields,
})(SimpleForm);
