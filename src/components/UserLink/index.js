import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserLink = ({ user }) => (
  <li>
    <Link to={'/member/' + user.id}>
      <img src={'/images/avatars/' + user.lastName.toLowerCase() + '.png'} alt={user.name} />
      {user.name}
    </Link>
  </li>
);

PropTypes.UserLink = {
  user: PropTypes.object.isRequired
};

export default UserLink;
