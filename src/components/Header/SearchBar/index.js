import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange(e) {
    this.setState({ searchTerm: e.target.value });
  };

  onClick() {
    this.props.search(this.state.searchTerm);
  };

  onKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.onClick();
    }
  }

  render() {
    return (
      <Form inline className="nav-item form--search form--search--header">
        <FontAwesomeIcon icon="search" />
        <Form.Label className="sr-only sr-only-focusable">Search</Form.Label>
        <input
          type="text"
          placeholder="Search members"
          value={this.state.searchTerm}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        <NavLink
          to='/search'
          onClick={this.onClick}
          className='btn btn-primary'
        >Search</NavLink>
      </Form>
    );
  }

}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
};

export default SearchBar;
