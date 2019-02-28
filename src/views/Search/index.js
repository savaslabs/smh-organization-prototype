import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageHeading from './../../components/PageHeading';
import UserLink from './../../components/UserLink';
import members from './../../data/members';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: null
    };
  }

  render() {
    const { searchTerm } = this.props;
    const memberArray = Object.assign([], members);
    let results;
    if (!searchTerm) {
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

    return (
      <div>
        <PageHeading title='Search Results'/>
        <div className='container'>
          {searchTerm &&
            <h2>Search results for "{searchTerm}"</h2>
          }
          <ul className='list--formatted'>
            {results.map((result, key) =>
              <UserLink key={key} item={result}/>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchTerm: PropTypes.string
};

export default Search;
