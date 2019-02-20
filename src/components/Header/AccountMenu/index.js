import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
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
      <div className="menu--account header__item">
        <button className="menu--account__icon" onClick={this.toggleState}>
          Icon
        </button>
        {this.state.open &&
        <div className="menu--account__list">
          <ListGroup className="alerts">
            <ListGroup.Item><Link to="/">Dashboard</Link></ListGroup.Item>
            <ListGroup.Item><a href="/">Settings</a></ListGroup.Item>
            <ListGroup.Item><a href="/" onClick={this.props.logout}>Log Out</a></ListGroup.Item>
          </ListGroup>
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
