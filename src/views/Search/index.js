import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageHeading from './../../components/PageHeading';
import members from './../../data/members';

class Search extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <PageHeading title='Search Results'/>
        <div className='container'>
          Search term: {this.props.searchTerm};
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchTerm: PropTypes.string
};

export default Search;
