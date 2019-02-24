import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Navbar, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AccountMenu = (props) => {
  if (!props.auth) {
    return <Redirect to="/" />;
  }

  return (
    <NavDropdown title="Account">
      <Navbar.Text href="/"><Link to="/">Dashboard</Link></Navbar.Text>
      <NavDropdown.Divider />
      <Navbar.Text><a href="/">Settings</a></Navbar.Text>
      <NavDropdown.Divider />
      <Navbar.Text><a href="/" onClick={props.logout}>Log Out</a></Navbar.Text>
    </NavDropdown>
  );
}

AccountMenu.propTypes = {
  auth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default AccountMenu;
