import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const SearchHeading = ({ searchTerm, numResults, handleSort }) => (
  <div className="search__heading pb-2">
    <h2>{numResults} Search Results for "{searchTerm}"</h2>
    <Form className="mb-2" inline>
      <Form.Group controlId="sortOption">
        <Form.Label className="mr-2 mb-0">Sort by</Form.Label>
        <Form.Control as="select" onChange={(e) => handleSort(e)}>
          <option>Last Name A-Z</option>
          <option>Last Name Z-A</option>
        </Form.Control>
      </Form.Group>
    </Form>
  </div>
);

SearchHeading.propTypes = {
  searchTerm: PropTypes.string,
  numResults: PropTypes.number,
  handleSort: PropTypes.func.isRequired
};

export default SearchHeading;