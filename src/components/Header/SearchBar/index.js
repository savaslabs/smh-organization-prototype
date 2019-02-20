import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchBar extends Component {
  render() {
    return (
      <Form className="form--search">
        <Form.Control type="text" placeholder="Search members" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default SearchBar;
