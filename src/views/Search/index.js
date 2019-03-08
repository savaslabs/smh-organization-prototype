import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import SearchHeading from './SearchHeading';
import SearchResults from './SearchResults';
import getResults from './../../utils/getResults';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: null
    };
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    this.setState({ sort: e.target.value });
  }

  render() {
    if (this.props.auth !== 'true') {
      return <Redirect to="/" />;
    }

    const { searchTerm } = this.props;
    const { sort } = this.state;
    const results = getResults(searchTerm);
    const numResults = results.length;

    if (sort && sort === 'Last Name Z-A') {
      results.reverse();
    }

    return (
      <div className='search container mt-5 mb-5'>
        {searchTerm &&
          <SearchHeading
            searchTerm={searchTerm}
            numResults = {numResults}
            handleSort={this.handleSort}
          />
        }
        <SearchResults results={results} />
      </div>
    );
  }
}

Search.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  searchTerm: PropTypes.string
};

export default Search;
