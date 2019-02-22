import React, { Component } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import alerts from './../../../data/alerts';

class AlertsMenu extends Component {
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
    return (
      <NavDropdown title="Notifications" className="alerts">
      {alerts.map((alert, index) =>
        <Navbar.Text key={index}>
          <p className="alert-item__text">{alert.alert}</p>
          {alert.time && <p className="alert-item__time">{alert.time}</p>}
          {alert.action && <p className="alert-item__action">{alert.action}</p>
          }
        </Navbar.Text>
      )}
      </NavDropdown>
    );
  }
}

export default AlertsMenu;
