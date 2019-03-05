import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';

import Alert from './../../Alert';
import alerts from './../../../data/alerts';

const AlertsMenu = () => {
  return (
    <NavDropdown
      title={<img src="/images/icons/bell.png" alt="Notifications menu icon" />}
      className="alerts"
    >
      <h2>Recent Notifications</h2>
      {alerts.map((alert, index) =>
        <Navbar.Text key={index}>
          <Alert alert={alert} />
        </Navbar.Text>
      )}
    </NavDropdown>
  );
};

export default AlertsMenu;
