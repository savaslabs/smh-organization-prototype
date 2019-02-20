import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class AccountMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({ open: !this.state.open });
  }

  render() {
    if (!this.props.auth) {
      return <Redirect to="/" />;
    }

    return (
      <div className="menu--account">
        <button className="menu--account__icon" onClick={this.toggleState}>
          Icon
        </button>
        {this.state.open &&
        <div className="menu--alerts__list">
          <ul className="alerts">
            <li><Link to="/">Dashboard</Link></li>
            <li><a href="/">Settings</a></li>
            <li><a href="/" onClick={this.props.logout}>Log Out</a></li>
          </ul>
        </div>
        }
      </div>
    );
  }
}

AccountMenu.propTypes = {
  auth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default AccountMenu;
