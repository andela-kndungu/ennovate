import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import request from 'superagent';
import { List, Map } from 'immutable';
import socket from '../../socket';
import AutoComplete from 'material-ui/AutoComplete';
import Toggle from 'material-ui/Toggle';
import store from '../../redux/store';

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

class AddDocumentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      public: true
    };

    this.createDocument = this.createDocument.bind(this);
  }

  createDocument() {
    request
      .post('api/documents')
      .send({
        title: this.state.title,
        content: this.state.content,
        category: this.state.category,
        accessibleBy: this.state.public ? ['user'] : [this.props.userDetails.get('username')]
      })
      .set('x-access-token', localStorage.getItem('token'))
      .end((error, response) => {
        if (error) {
          return null;
        }
        console.log(response.body);

        store.dispatch({ type: 'TOGGLE_ADD_DOCUMENT' });
        return socket.emit('newDocument', response.body);
      });
  }

  render() {
    let categories = this.props.categories.toJS();
    categories = categories.map((categoryObject) => {
      return categoryObject.title;
    });
    return (
      <div style={divStyle}>
        <div style={fieldStyle}>
          <AutoComplete
            style={{ width: '100%' }}
            floatingLabelText="Choose or create category"
            filter={AutoComplete.fuzzyFilter}
            openOnFocus
            dataSource={categories}
            onNewRequest={(chosen) => {
              this.setState({
                category: chosen
              });
            }}
            onBlur={(event) => {
              this.setState({
                category: event.target.value
              });
            }}
          />
        </div>
        <div style={fieldStyle}>
          <TextField
            style={{ width: '100%' }}
            name="title"
            floatingLabelText="Title"
            onChange={(event) => {
              this.setState({
                title: event.target.value
              });
            }}
          />
        </div>
        <div style={fieldStyle}>
          <TextField
            style={{ width: '100%' }}
            name="content"
            floatingLabelText="Content"
            multiLine
            rowsMax={4}
            onChange={(event) => {
              this.setState({
                content: event.target.value
              });
            }}
          />
        </div>
        <div style={fieldStyle}>
          <Toggle
            style={{ width: '100px', marginTop: '20px', marginBottom: '10px' }}
            label="Public"
            defaultToggled
            onToggle={() => {
              this.setState({ public: !this.state.public });
            }}
          />
        </div>
        <FlatButton
          style={buttonStyle}
          label="Add"
          onClick={this.createDocument}
        />
      </div>
    );
  }
}

AddDocumentForm.propTypes = {
  categories: React.PropTypes.instanceOf(List),
  userDetails: React.PropTypes.instanceOf(Map)
};

export default AddDocumentForm;

