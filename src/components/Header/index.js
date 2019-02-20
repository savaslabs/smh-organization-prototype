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

const Header = (props) => {
  if (props.auth) {
    return (
      <header className="header">
        <div className="container">
          <Logo />
          <SearchBar />
          <Button href="#" variant="primary">Create Account</Button>
          <AlertsMenu />
          <AccountMenu auth = {this.props.auth} logout={this.props.logout}/>
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
