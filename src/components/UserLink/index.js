import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserLink = ({ key, item }) => (
  <li key={key}>
    <FontAwesomeIcon icon={['far', 'user-circle']} className='mr-2' />
    <Link to={'/member/' + item.id}>{item.name}</Link>
  </li>
);

PropTypes.UserLink = {
  key: PropTypes.number,
  item: PropTypes.object.isRequired
};

export default UserLink;
