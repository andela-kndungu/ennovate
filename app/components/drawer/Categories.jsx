import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    categories: state.app.get('categories')
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

  handleChange(event, index, value) { this.setState({ value }); }

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
  categories: React.PropTypes.array
};

export default connect(mapStateToProps)(Categories);

