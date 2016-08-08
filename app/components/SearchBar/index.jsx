import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';

import store from '../../redux/store';

const containerStyle = {
  width: '80%',
  maxWidth: '500px',
  margin: 'auto'
};
const hintStyle = {
  width: '100%',
  textAlign: 'center',
};

const fieldStyle = {
  width: '100%'
};

const inputStyle = {
  color: 'white',
  textAlign: 'center'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };

    this.textChange = this.textChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  filter(value) {
    const filtered = this.props.documents.filter((document) => {
      if (value === '') {
        return true;
      }

      const inTitle = document.title.toLowerCase().indexOf(value);
      const inContent = document.content.toLowerCase().indexOf(value);

      return inTitle > -1 || inContent > -1;
    });

    store.dispatch({ type: 'FILTER_DOCUMENTS', payload: filtered });
  }

  textChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      return this.filter(this.state.searchTerm);
    }
    return null;
  }

  render() {
    return (
      <div style={containerStyle}>
        <TextField
          onChange={this.textChange}
          style={fieldStyle}
          hintText="search"
          hintStyle={hintStyle}
          inputStyle={inputStyle}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    documents: state.app.get('documents')
  });
};

SearchBar.propTypes = {
  documents: React.PropTypes.array
};

export default connect(mapStateToProps)(SearchBar);

