import React from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import SearchBar from './SearchBar';
import AlertsMenu from './AlertsMenu';
import AccountMenu from './AccountMenu';

// @todo: Replace with logo img.
const Logo = () => {
  return (
    <Link className="logo" to="/">Share My Health</Link>
  );
};

const CreateAccount = () => {
  return (
    <div className="header__item">
      <Button href="#" variant="primary">Create Account</Button>
    </div>
  )
};

const Header = (props) => {
  if (props.auth) {
    return (
      <header className="header">
        <div className="container">
          <Logo />
          <SearchBar />
          <CreateAccount />
          <AlertsMenu />
          <AccountMenu auth = {props.auth} logout={props.logout}/>
        </div>
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
  auth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;
