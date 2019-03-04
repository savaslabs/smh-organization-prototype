import React from 'react';
import PropTypes from 'prop-types';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from './SearchBar';
import AlertsMenu from './AlertsMenu';
import AccountMenu from './AccountMenu';

const Logo = () => {
  return (
    <Navbar.Brand href="/">
      <img src="/images/logo.png" alt="Share My Health Home" />
    </Navbar.Brand>
  );
};

const CreateAccount = () => {
  return (
    <div className="nav-item nav-item--button">
      <Button href="#" variant="primary">
        <FontAwesomeIcon icon="plus" className="mr-1"/>
        Create Account
      </Button>
    </div>
  )
};

const Header = ({ auth, logout, search }) => {
  if (auth === 'true') {
    return (
      <header className="header header--auth">
        <Navbar expand="lg" className="container">
          <Logo />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <SearchBar search={search}/>
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
    <header className="header header--anon">
      <div className="container">
        <Logo />
        <h1 className="header--anon__heading">Login</h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  logout: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

export default Header;
