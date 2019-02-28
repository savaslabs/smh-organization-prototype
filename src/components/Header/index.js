import React from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import { Button, Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';
import AlertsMenu from './AlertsMenu';
import AccountMenu from './AccountMenu';

// @todo: Replace with logo img.
const Logo = () => {
  return (
    <Navbar.Brand href="/">Share My Health</Navbar.Brand>
  );
};

const CreateAccount = () => {
  return (
    <div className="nav-item">
      <Button href="#" variant="primary">Create Account</Button>
    </div>
  )
};

const Header = ({ auth, logout }) => {
  if (auth === 'true') {
    return (
      <header className="header">
        <Navbar expand="lg" className="container">
          <Logo />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <SearchBar />
            <Nav className="mr-auto">
              <CreateAccount />
              <AlertsMenu />
              <AccountMenu logout={logout}/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Link to="/">Log In</Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;
