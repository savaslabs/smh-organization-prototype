import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchHeading from './SearchHeading';
import SearchResults from './SearchResults';
import members from './../../data/members';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: null
    };
    this.handleSort = this.handleSort.bind(this);
  }

  /**
   * Return an array of members sorted alphabetically.
   */
  getResults() {
    const { searchTerm } = this.props;
    const memberArray = Object.assign([], members);
    let results;

    // If there's a search term return relevant results, otherwise all members.
    if (!this.props.searchTerm) {
      results = memberArray;
    }
    else {
      results = memberArray.filter(function(member) {
        if (member.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return member;
        }
        return null;
      });
    }

    // Sort alphabetically.
    results.sort(function(a, b) {
      return a.lastName.localeCompare(b.lastName);
    });

    return results;
  };

  handleSort(e) {
    this.setState({ sort: e.target.value });
  }

  render() {
    const { searchTerm } = this.props;
    const { sort } = this.state;
    const results = this.getResults();
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
  searchTerm: PropTypes.string
};

export default Search;
