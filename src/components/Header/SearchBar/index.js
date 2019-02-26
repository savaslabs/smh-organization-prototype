import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
  render() {
    return (
      <Form inline className="nav-item form--search">
        <FontAwesomeIcon icon="search" />
        <Form.Label className="sr-only sr-only-focusable">Search</Form.Label>
        <Form.Control type="text" placeholder="Search members" />
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

export default SearchBar;
