import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserLink = ({ item }) => (
  <li>
    <FontAwesomeIcon icon={['far', 'user-circle']} className='mr-2' />
    <Link to={'/member/' + item.id}>{item.name}</Link>
  </li>
);

PropTypes.UserLink = {
  item: PropTypes.object.isRequired
};

export default UserLink;
