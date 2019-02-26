import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AccountMenu = ({ logout }) => (
  <NavDropdown title="Account">
    <Navbar.Text href="/"><Link to="/">Dashboard</Link></Navbar.Text>
    <NavDropdown.Divider />
    <Navbar.Text><a href="/">Settings</a></Navbar.Text>
    <NavDropdown.Divider />
    <Navbar.Text><a href="/" onClick={logout}>Log Out</a></Navbar.Text>
  </NavDropdown>
);

AccountMenu.propTypes = {
  logout: PropTypes.func.isRequired
};

export default AccountMenu;
