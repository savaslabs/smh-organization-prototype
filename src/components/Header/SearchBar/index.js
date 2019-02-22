import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class SearchBar extends Component {
  render() {
    return (
      <Form inline className="nav-item">
        <Form.Control type="text" placeholder="Search members" />
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

export default SearchBar;
