import React from "react";
import PropTypes from "prop-types";

import UserLink from "./../../../components/UserLink";

const SearchResults = ({ results }) => (
  <div className="search__results">
    {!results && <p>No results</p>}
    <ul className="list--formatted">
      {results.map((result, key) => <UserLink key={key} user={result} />)}
    </ul>
  </div>
);

SearchResults.propTypes = {
  results: PropTypes.array
};

export default SearchResults;
