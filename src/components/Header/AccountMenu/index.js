import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AccountMenu = ({ logout }) => {
  // Fix a react-bootstrap bug; menu doesn't close when an item is clicked.
  const onClick = () => {
    document.dispatchEvent(new MouseEvent('click'));
  };

  return (
    <NavDropdown
      title={<img src="/images/avatars/admin.png" alt="Account menu icon" />}
      className="notifications"
    >
      <Navbar.Text onClick={onClick}><Link to="/">Dashboard</Link></Navbar.Text>
      <NavDropdown.Divider />
      <Navbar.Text><a href="/">Settings</a></Navbar.Text>
      <NavDropdown.Divider />
      <Navbar.Text><a href="/" onClick={logout}>Log Out</a></Navbar.Text>
    </NavDropdown>
  );
};

AccountMenu.propTypes = {
  logout: PropTypes.func.isRequired
};

export default AccountMenu;
