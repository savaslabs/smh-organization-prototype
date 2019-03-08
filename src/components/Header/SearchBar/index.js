import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserLink from './../../../components/UserLink';
import getResults from './../../../utils/getResults';

const Autocomplete = ({ searchTerm, search, close }) => {
  const results = getResults(searchTerm);
  const numResults = results.length;
  const resultsText = numResults > 1 ? 'See all ' + numResults + ' results' : 'See results';

  if (numResults) {
    return (
      <div className="search-autocomplete">
        <p className="font-italic mb-0">Quick Results</p>
        <ul className="list--formatted" onClick={close}>
          {results.map((result, key) =>
            <UserLink key={key} user={result}/>
          )}
        </ul>
        <div className="text-center">
          <Button onClick={search} className="button--reset mt-3">
            {resultsText}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="search-autocomplete">
      <p className="font-italic mb-0">No Results</p>
    </div>
  );
};

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
    this.close = this.close.bind(this);
  }

  onChange(e) {
    this.setState({ searchTerm: e.target.value });
  };

  /**
   * Do search, redirect to search, hide autocomplete.
   */
  onClick() {
    this.props.search(this.state.searchTerm);
    this.setState({
      searchTerm: '',
      redirect: true
    });
  };

  /**
   * Handle enter keypress.
   */
  onKeyPress(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      this.onClick();
    }
  }

  /**
   * Hide autocomplete when user link is clicked.
   */
  close() {
    this.setState({ searchTerm: '' });
  }

  render() {
    const { searchTerm, redirect } = this.state;
    return (
      <div className="nav-item nav-item--search pr-3 pl-3">
        {redirect &&
          <Redirect to='/search' />
        }
        <Form inline className="form--search form--search--header">
          <Form.Label className="sr-only sr-only-focusable">Search</Form.Label>
          <input
            type="text"
            placeholder="Search members"
            value={searchTerm}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
          <Button onClick={this.onClick} className="button--reset">
            <FontAwesomeIcon icon="search" />
          </Button>
        </Form>
        {searchTerm.length > 0 &&
          <Autocomplete
            searchTerm={searchTerm}
            search={this.onClick}
            close={this.close}
          />
        }
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
};

export default SearchBar;
