import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';

import store from '../../redux/store';

const mapStateToProps = (state) => {
  return ({
    categories: state.app.get('categories'),
    documents: state.app.get('documents')
  });
};

const items = [];
for (let i = 0; i < 100; i++) {
  items.push(<MenuItem value={i} key={i} primaryText={`A mennu item ${i}`} />);
}

class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    const filtered = this.props.documents.filter((document) => {
      return document.category === this.props.categories[index].title;
    });

    store.dispatch({ type: 'FILTER_DOCUMENTS', payload: filtered });
    store.dispatch({ type: 'CHANGE_CATEGORY' });
  }

  render() {
    const categories = this.props.categories.map((category, index) => {
      return (
        <MenuItem
          value={index}
          key={index}
          primaryText={category.title}
        />
      );
    });
    return (
      <DropDownMenu style={{ width: '100%' }} maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        {categories}
      </DropDownMenu>
    );
  }
}

Categories.propTypes = {
  categories: React.PropTypes.array,
  documents: React.PropTypes.array
};

export default connect(mapStateToProps)(Categories);

