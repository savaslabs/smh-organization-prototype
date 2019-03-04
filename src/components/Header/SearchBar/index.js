import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      redirect: false
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
    this.setState({ redirect: true });
  };

  onKeyPress(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      this.onClick();
    }
  }

  render() {
    return (
      <div className="nav-item nav-item--search">
        {this.state.redirect &&
          <Redirect to='/search' />
        }
        <Form inline className="form--search form--search--header">
          <Form.Label className="sr-only sr-only-focusable">Search</Form.Label>
          <input
            type="text"
            placeholder="Search members"
            value={this.state.searchTerm}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
          <Button onClick={this.onClick} className="button--reset"><FontAwesomeIcon icon="search" /></Button>
        </Form>
      </div>
    );
  }

}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
};

export default SearchBar;
